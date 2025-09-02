interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header>
      <h1 className="font-roboto text-3xl border-b-2 border-gray-200 w-100 text-center mx-auto my-5 pb-5">
        {title}
      </h1>
    </header>
  );
}
