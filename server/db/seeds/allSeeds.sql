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
INSERT INTO users (
  first_name,
  password,
  email,
  phone_number
) VALUES (
  'Luko',
  '123',
  'luko@puko.com',
  '1111111112'
);


INSERT INTO books (user_id, title, author, location, photo) VALUES (1, 'A Thousand Splendid Suns', 'Khaled Hosseini', 'Liso Library', 'https://productimages.worldofbooks.com/074758589X.jpg');
INSERT INTO books (user_id, title, author, location, photo) VALUES (1, 'And The Mountains Echoed', 'Khaled Hosseini', 'Liso Library', 'https://m.media-amazon.com/images/I/51gXMIZ8sVL._AC_UF1000,1000_QL80_.jpg');
INSERT INTO books (user_id, title, author, location, photo) VALUES (1, 'The Outsiders', 'S.E Hinton', 'Liso Library', 'https://interactive.wttw.com/sites/default/files/the-outsiders@2x.jpg');


INSERT INTO alerts (book_id, user_id, due_date, SMS, email, calendar) VALUES (1, 1, '2023-02-26', TRUE, FALSE, FALSE);
INSERT INTO alerts (book_id, user_id, due_date, SMS, email, calendar) VALUES (2, 1, '2023-02-26', FALSE, TRUE, FALSE);
INSERT INTO alerts (book_id, user_id, due_date, SMS, email, calendar) VALUES (3, 1, '2023-02-26', FALSE, TRUE, TRUE);