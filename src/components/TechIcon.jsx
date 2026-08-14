export default function TechIcon({ name, size = 'md', showLabel = false, showTooltip = true, className = '' }) {
  const normalized = name.toLowerCase().trim();

  const iconSizeClass = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-lg';
  const svgSizeClass = size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-6 h-6' : 'w-4 h-4';

  const renderIcon = () => {
    switch (normalized) {
      case 'java':
        return <i className={`devicon-java-plain colored ${iconSizeClass}`}></i>;
      case 'spring boot':
      case 'spring':
        return <i className={`devicon-spring-original colored ${iconSizeClass}`}></i>;
      case 'react':
        return <i className={`devicon-react-original colored ${iconSizeClass}`}></i>;
      case 'docker':
        return <i className={`devicon-docker-plain colored ${iconSizeClass}`}></i>;
      case 'sql':
      case 'postgresql':
      case 'postgres':
        return <i className={`devicon-postgresql-plain colored ${iconSizeClass}`}></i>;
      case 'html':
      case 'html5':
        return <i className={`devicon-html5-plain colored ${iconSizeClass}`}></i>;
      case 'css':
      case 'css3':
        return <i className={`devicon-css3-plain colored ${iconSizeClass}`}></i>;
      case 'html / css':
      case 'html/css':
        return (
          <span className="inline-flex items-center gap-1">
            <i className={`devicon-html5-plain colored ${iconSizeClass}`}></i>
            <i className={`devicon-css3-plain colored ${iconSizeClass}`}></i>
          </span>
        );
      case 'javascript':
      case 'js':
        return <i className={`devicon-javascript-plain colored ${iconSizeClass}`}></i>;
      case 'python':
        return <i className={`devicon-python-plain colored ${iconSizeClass}`}></i>;
      case 'fastapi':
        return <i className={`devicon-fastapi-plain colored ${iconSizeClass}`}></i>;
      case 'node.js':
      case 'nodejs':
      case 'node':
        return <i className={`devicon-nodejs-plain colored ${iconSizeClass}`}></i>;
      case 'tailwind':
      case 'tailwindcss':
      case 'tailwind css':
        return <i className={`devicon-tailwindcss-original colored ${iconSizeClass}`}></i>;
      case 'git':
        return <i className={`devicon-git-plain colored ${iconSizeClass}`}></i>;
      case 'swagger ui':
      case 'swagger':
        return <i className={`devicon-swagger-plain colored ${iconSizeClass}`}></i>;
      case 'postman':
        return <i className={`devicon-postman-plain colored ${iconSizeClass}`}></i>;
      case 'playwright':
        return (
          <svg className={`${svgSizeClass} fill-current text-[#2EAD33]`} viewBox="0 0 24 24">
            <path d="M18.8 4.2C17.2 2.6 15 1.7 12.7 1.7 8 1.7 4.1 5.2 3.4 9.8c-.1.6 0 1.2.3 1.8.3.5.8.9 1.4 1 1.2.3 2.5-.5 2.8-1.7.5-3 3-5.2 6.1-5.2 1.5 0 2.9.6 4 1.6 1 1 1.6 2.4 1.6 3.9 0 2.9-2.1 5.4-5 5.9-1.2.2-2.1 1.3-1.9 2.5.2 1.1 1.2 2 2.3 2 .2 0 .4 0 .6-.1 4.5-.8 7.8-4.7 7.8-9.3.1-2.4-.9-4.8-2.6-6.5zM7.2 15.5c-.8.8-1.3 1.9-1.3 3.1 0 2.4 2 4.4 4.4 4.4 1.2 0 2.3-.5 3.1-1.3.8-.8.8-2.1 0-2.9-.8-.8-2.1-.8-2.9 0-.1.1-.1.1-.2.1-.8 0-1.5-.7-1.5-1.5 0-.1 0-.1.1-.2.8-.8.8-2.1 0-2.9-.9-.8-2.2-.8-3 .2z"/>
          </svg>
        );
      case 'jwt':
        return (
          <span className={`font-mono font-bold text-[#d63aff] ${size === 'sm' ? 'text-[10px]' : 'text-xs'}`}>
            JWT
          </span>
        );
      case 'brevo api':
      case 'brevo':
        return (
          <i className={`fas fa-paper-plane text-[#0B996E] ${iconSizeClass}`}></i>
        );
      case 'istqb':
        return (
          <i className={`fas fa-certificate text-amber-400 ${iconSizeClass}`}></i>
        );
      default:
        return <i className={`fas fa-code text-orange-400 ${iconSizeClass}`}></i>;
    }
  };

  return (
    <div
      title={name}
      className={`relative group/tech inline-flex items-center justify-center ${className}`}
    >
      {renderIcon()}
      {showLabel && <span className="ml-1.5 text-xs text-slate-300 font-mono">{name}</span>}

      {/* Instant Floating Tooltip */}
      {showTooltip && (
        <div className="absolute -top-8.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover/tech:opacity-100 group-hover/tech:visible -translate-y-1 group-hover/tech:translate-y-0 transition-all duration-150 pointer-events-none z-50 whitespace-nowrap bg-[#1a1a1a] text-slate-200 text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-[#333] shadow-xl shadow-black/80 flex items-center">
          <span>{name}</span>
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#1a1a1a] border-r border-b border-[#333] rotate-45"></span>
        </div>
      )}
    </div>
  );
}
