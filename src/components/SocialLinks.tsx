const iconHover =
  "block transform transition-transform duration-200 ease-in-out hover:-translate-y-2 hover:text-secondary";

export function GithubLink({
  href,
  ariaLabel,
  iconStyle,
}: {
  href: string;
  ariaLabel: string;
  iconStyle?: string;
}): JSX.Element {
  return (
    <a
      className={iconStyle ?? iconHover}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ariaLabel}
      title="GitHub"
    >
      <span className="sr-only">Github</span>
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    </a>
  );
}

export default function SocialLinks(): JSX.Element {
  return (
    <ul className="ml-1 mt-4 flex items-center">
      <li className="mr-5 text-xs shrink-0">
        <GithubLink
          href="https://github.com/khoaHyh"
          ariaLabel="GitHub (opens in a new tab)"
        />
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a
          className={iconHover}
          href="https://www.linkedin.com/in/khoa-huynh-717ba41bb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
          title="LinkedIn"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 12.3h-3v-5.6c0-1.3 0-3-1.8-3s-2.2 1.4-2.2 2.9v5.7h-3v-11h2.9v1.5h.1c.4-.7 1.4-1.5 2.9-1.5 3.1 0 3.7 2 3.7 4.7v6.3z" />
          </svg>
        </a>
      </li>
    </ul>
  );
}
