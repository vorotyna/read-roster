INSERT INTO users (
  first_name,
  password,
  email,
  phone_number
) VALUES (
  'Liso',
  '123',
  'liso@piso.com',
  '1111111111'
);


INSERT INTO books (user_id, title, author) VALUES (1, 'A Thousant Splendid Suns', 'Khaled Hosseini');
INSERT INTO books (user_id, title, author) VALUES (1, 'And The Mountains Echoed', 'Khaled Hosseini');
INSERT INTO books (user_id, title, author) VALUES (1, 'The Outsiders', 'S.E Hinton');


INSERT INTO alerts (book_id, due_date, notes, text, email, calendar) VALUES (1, '2023-02-26', 'This book was borrowed from the Liso Library', TRUE, FALSE, FALSE);
INSERT INTO alerts (book_id, due_date, notes, text, email, calendar) VALUES (1, '2023-02-26', 'This book was borrowed from the Liso Library', FALSE, TRUE, FALSE);
INSERT INTO alerts (book_id, due_date, notes, text, email, calendar) VALUES (1, '2023-02-26', 'This book was borrowed from the Liso Library', FALSE, TRUE, TRUE);