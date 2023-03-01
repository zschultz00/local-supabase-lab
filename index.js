
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://fyadkralszkltdwayies.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5YWRrcmFsc3prbHRkd2F5aWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczMTgwOTUsImV4cCI6MTk5Mjg5NDA5NX0.PYVE17ZspD9WXmGfjkZdPIICSc0034QLZ06JBCI7BNg'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML += `<tr><td>${book.id}</td><td>${book.created_at}</td><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></td><td>${book.description}</td></tr>`;
}
}

getBooks();