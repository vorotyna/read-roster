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


INSERT INTO books (user_id, title, author, location) VALUES (1, 'A Thousant Splendid Suns', 'Khaled Hosseini', 'Liso Library');
INSERT INTO books (user_id, title, author, location) VALUES (1, 'And The Mountains Echoed', 'Khaled Hosseini', 'Liso Library');
INSERT INTO books (user_id, title, author, location) VALUES (1, 'The Outsiders', 'S.E Hinton', 'Liso Library');


INSERT INTO alerts (book_id, user_id, due_date, SMS, email, calendar) VALUES (1, 1, '2023-02-26', TRUE, FALSE, FALSE);
INSERT INTO alerts (book_id, user_id, due_date, SMS, email, calendar) VALUES (2, 1, '2023-02-26', FALSE, TRUE, FALSE);
INSERT INTO alerts (book_id, user_id, due_date, SMS, email, calendar) VALUES (3, 1, '2023-02-26', FALSE, TRUE, TRUE);