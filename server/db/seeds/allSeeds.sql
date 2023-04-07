INSERT INTO users (
  first_name,
  password,
  email,
  phone_number
) VALUES (
  'Liso',
  '123',
  'alisa.vorotyn@gmail.com',
  '+16506648860'
);
INSERT INTO users (
  first_name,
  password,
  email,
  phone_number
) VALUES (
  'Luko',
  '123',
  'luka.mircetic@gmail.com',
  '+16503333655'
);


INSERT INTO books (user_id, title, author, location, photo) VALUES (1, 'A Thousand Splendid Suns', 'Khaled Hosseini', 'Liso Library', 'https://productimages.worldofbooks.com/074758589X.jpg');
INSERT INTO books (user_id, title, author, location, photo) VALUES (1, 'And The Mountains Echoed', 'Khaled Hosseini', 'Liso Library', 'https://m.media-amazon.com/images/I/51gXMIZ8sVL._AC_UF1000,1000_QL80_.jpg');
INSERT INTO books (user_id, title, author, location, photo) VALUES (1, 'The Outsiders', 'S.E Hinton', 'Liso Library', 'https://interactive.wttw.com/sites/default/files/the-outsiders@2x.jpg');
INSERT INTO books (user_id, title, author, location, photo) VALUES (2, 'A Thousand Splendid Suns', 'Khaled Hosseini', 'Luko Library', 'https://productimages.worldofbooks.com/074758589X.jpg');


INSERT INTO alerts (book_id, user_id, due_date, alert_time, SMS, email) VALUES (1, 1, '2023-03-26', '2023-04-10T22:35', TRUE, FALSE);
INSERT INTO alerts (book_id, user_id, due_date, alert_time, SMS, email) VALUES (2, 1, '2023-04-27', '2023-04-10T22:35', TRUE, FALSE);
INSERT INTO alerts (book_id, user_id, due_date, alert_time, SMS, email) VALUES (3, 1, '2023-04-28', '2023-05-10T22:35', FALSE, TRUE);
INSERT INTO alerts (book_id, user_id, due_date, alert_time, SMS, email) VALUES (4, 2, '2023-04-29', '2023-05-10T22:35', FALSE, FALSE);
