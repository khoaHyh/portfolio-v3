interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps): JSX.Element {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {tags.map((tag) => (
        <li key={tag} className="mr-1.5 mt-2">
          <div className="font-sans flex items-center rounded-xl bg-secondaryAlt px-3 py-1 text-pinkSoft text-xs font-medium leading-5">
            {tag}
          </div>
        </li>
      ))}
    </ul>
  );
}
