import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  isInView: boolean;
}

export function ProjectCard({
  index,
  title,
  subtitle,
  description,
  metrics,
  tags,
  image,
  githubUrl,
  liveUrl,
  isInView
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group grid lg:grid-cols-2 gap-8 p-8 rounded-2xl bg-card border border-border card-hover"
    >
      {/* Project Image */}
      <div className="relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden bg-muted">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-6xl font-bold text-muted-foreground/20">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Info */}
      <div className="flex flex-col justify-between">
        <div>
          {/* Index and Subtitle */}
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm text-primary">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              {subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-lg bg-secondary/50 mb-6">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-xl font-bold text-foreground">
                  {metric.value}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <Github className="w-4 h-4" />
                Code
              </Button>
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2">
                View Project
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
