# Use nginx alpine as base image for lightweight static file serving
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy static files (HTML, CSS, JS, images)
COPY src/index.html .
COPY src/style.css .
COPY src/script.js .
COPY src/images/ ./images/

# Copy nginx configuration for better performance
COPY config/nginx/nginx.conf /etc/nginx/nginx.conf

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Change ownership of the working directory
RUN chown -R nextjs:nodejs /usr/share/nginx/html && \
    chown -R nextjs:nodejs /var/cache/nginx && \
    chown -R nextjs:nodejs /var/log/nginx && \
    chown -R nextjs:nodejs /etc/nginx/conf.d

# Switch to non-root user
USER nextjs

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 