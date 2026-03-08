// Simple in-memory rate limiter for email submissions
// In production, consider using Redis or a database for persistence

interface RateLimitEntry {
  count: number;
  lastSubmission: number;
  resetTime: number;
}

class RateLimiter {
  private submissions = new Map<string, RateLimitEntry>();
  private readonly maxSubmissions: number;
  private readonly windowMs: number;

  constructor(maxSubmissions = 5, windowMinutes = 15) {
    this.maxSubmissions = maxSubmissions;
    this.windowMs = windowMinutes * 60 * 1000;
  }

  // Generate identifier from email or IP
  private getIdentifier(email: string, ip?: string): string {
    // Prefer email for rate limiting, fallback to IP if available
    return email.toLowerCase() || ip || "unknown";
  }

  // Check if submission is allowed
  isAllowed(
    email: string,
    ip?: string,
  ): { allowed: boolean; resetTime?: number; remaining?: number } {
    const identifier = this.getIdentifier(email, ip);
    const now = Date.now();

    const entry = this.submissions.get(identifier);

    // No previous submissions
    if (!entry) {
      this.submissions.set(identifier, {
        count: 1,
        lastSubmission: now,
        resetTime: now + this.windowMs,
      });
      return { allowed: true, remaining: this.maxSubmissions - 1 };
    }

    // Check if window has expired
    if (now > entry.resetTime) {
      this.submissions.set(identifier, {
        count: 1,
        lastSubmission: now,
        resetTime: now + this.windowMs,
      });
      return { allowed: true, remaining: this.maxSubmissions - 1 };
    }

    // Check if under limit
    if (entry.count < this.maxSubmissions) {
      entry.count++;
      entry.lastSubmission = now;
      return { allowed: true, remaining: this.maxSubmissions - entry.count };
    }

    // Rate limit exceeded
    return {
      allowed: false,
      resetTime: entry.resetTime,
      remaining: 0,
    };
  }

  // Get remaining submissions for a user
  getRemaining(email: string, ip?: string): number {
    const identifier = this.getIdentifier(email, ip);
    const entry = this.submissions.get(identifier);

    if (!entry || Date.now() > entry.resetTime) {
      return this.maxSubmissions;
    }

    return Math.max(0, this.maxSubmissions - entry.count);
  }

  // Get time until reset in seconds
  getResetTime(email: string, ip?: string): number {
    const identifier = this.getIdentifier(email, ip);
    const entry = this.submissions.get(identifier);

    if (!entry) {
      return 0;
    }

    const now = Date.now();
    return Math.max(0, Math.ceil((entry.resetTime - now) / 1000));
  }

  // Clean up expired entries (call periodically)
  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.submissions.entries()) {
      if (now > entry.resetTime) {
        this.submissions.delete(key);
      }
    }
  }
}

// Create singleton instances with different limits
export const contactRateLimiter = new RateLimiter(3, 15); // 3 submissions per 15 minutes
export const bookingRateLimiter = new RateLimiter(5, 60); // 5 submissions per hour

// Cleanup expired entries every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(
    () => {
      contactRateLimiter.cleanup();
      bookingRateLimiter.cleanup();
    },
    5 * 60 * 1000,
  );
}
