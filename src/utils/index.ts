export function slugify(text: string): string {
    return text
      .toString() // Ensure it's a string
      .normalize("NFD") // Decompose accents from letters
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks (accents)
      .toLowerCase() // Convert to lowercase
      .trim() // Remove whitespace from both ends
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/[^\w\-]+/g, "") // Remove all non-word characters
      .replace(/\-\-+/g, "-"); // Replace multiple dashes with a single dash
  }