interface BookItem {
  id: number;
  title: string;
}

interface BookListProps {
  books: BookItem[];
}

export function BookList({ books }: BookListProps) {
  const renderedBooks = books.map(({ id, title }: BookItem) => {
    return <li key={id}>{title}</li>;
  });

  return <ul>{renderedBooks}</ul>;
}
