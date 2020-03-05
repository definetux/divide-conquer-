CREATE TABLE public.users
(
    name varchar(50) NOT NULL,
    job varchar(50) NOT NULL,
    id SERIAL NOT NULL,
    age integer NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    created_date timestamp NOT NULL
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;


INSERT INTO users
    (name, job, age, created_date)
VALUES
    ('James', 'engineer', 24, '2020-01-02 11:11:11'),
    ('Jane', 'engineer', 23, '2020-01-05 01:11:11'),
    ('Steve', 'designer', 26, '2020-01-08 12:11:11'),
    ('Robert', 'architect', 30, '2020-01-09 05:11:11')
