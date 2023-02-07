-- CREATE SCHEMA IF NOT EXISTS "chatApp"
--     AUTHORIZATION postgres;


-- CREATE TABLE IF NOT EXISTS "chatApp".login_info
-- (
--     "userId" integer NOT NULL DEFAULT nextval('"chatApp"."login_info_userId_seq"'::regclass),
--     "userName" text COLLATE pg_catalog."default" NOT NULL,
--     email text COLLATE pg_catalog."default" NOT NULL,
--     CONSTRAINT login_info_pkey PRIMARY KEY ("userId")
-- )

-- TABLESPACE pg_default;

-- ALTER TABLE IF EXISTS "chatApp".login_info
--     OWNER to postgres;