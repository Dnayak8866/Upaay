/* connecting to "Upaay" database... */

-- Database: Upaay

-- DROP DATABASE IF EXISTS "Upaay";

-- Check if not exists condition

CREATE DATABASE "Upaay"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_India.1252'
    LC_CTYPE = 'English_India.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


CREATE TABLE Users(
	UserId int GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) NOT NULL,
	ReferenceNo int NULL,
	Email varchar(50) NULL,
	"Password" varchar(100) NULL,
	CreatedBy varchar(100) NULL,
	CreatedDate TIMESTAMP(3) NULL,
	UpdatedBy varchar(100) NULL,
	UpdatedDate TIMESTAMP(3) NULL,
PRIMARY KEY 
(
	UserId
)
);


CREATE TABLE UserOtpVerification(
	Id int GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) NOT NULL,
	UserId int NOT NULL,
	Otp int NOT NULL,
	ExpiryDate TIMESTAMP(3) NOT NULL,
	NoOfAttempts int NULL,
	CreatedBy varchar(100) NOT NULL,
	CreatedDate TIMESTAMP(3) NOT NULL,
	UpdatedBy varchar(100) NULL,
	UpdatedDate TIMESTAMP(3) NULL,
PRIMARY KEY 
(
	Id
)
);

ALTER TABLE UserOtpVerification  ADD FOREIGN KEY(UserId)
REFERENCES Users (UserId);

CREATE TABLE ClientPersonalDetails(
	ClientId int GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) NOT NULL,
	"Name" VARCHAR(300) NOT NULL,
	MobileNo bigint NOT NULL,
	IsMobileNoVerified SMALLINT NOT NULL,
	Email TEXT NOT NULL,
	IsEmailVerified SMALLINT NOT NULL,
	PanCardNo TEXT NOT NULL,
	AadharCardNo TEXT NOT NULL,
	DateOfBirth TIMESTAMP(6) NOT NULL,
	Gender int NOT NULL,
	MaritalStatus int NOT NULL,
	RelationType int NOT NULL,
	RelationName VARCHAR(300) NOT NULL,
	ProfilePhoto BYTEA NOT NULL,
	Signature BYTEA NOT NULL,
	IsPanVerified SMALLINT NOT NULL,
	AnnualIncome int NOT NULL,
	Occupation int NOT NULL,
	CreatedBy varchar(100) NULL,
	CreatedDate TIMESTAMP(3) NULL,
 CONSTRAINT PK_ClientDetails PRIMARY KEY 
(
	ClientId
)
);

CREATE TABLE mutual_funds(
	scheme_code varchar(500) NOT NULL primary key,
	isin_div_payout_growth varchar(500),
	isin_div_reinvestment varchar(500),
	scheme_name varchar(500),
	nav varchar(500),
	nav_date varchar(500)
)


