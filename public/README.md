## *** Shirt Multi Ecommerce CODES STEPS SPRING JAVA REACT ***

# First create maven project in https://start.spring.io/ website and generate project

# Then create mysql database and import sql file in database

# Then search in google mysql driver class and select the spring.io

# Then find this one

spring.application.name=shirt-multivendor

#server.port=3306

#

spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/shirt_ecommerce
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql: true

# create the database in mysql command line

- login to mysql
- show databases;
- create database shirt_ecommerce;

# create a package called controller and create a class called HomeController.java

# Now lets create a controller, to create this we need to annotate the class with @RestController

package com.mackodev.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping
    public String HomeControllerHandler(){
        return "Welcome to ShirtThreads a multi vendor ecommerce website";
    }

}

# then in browser go to http://localhost:8080/ we can notice that we redirected to login page this is because we enable the spring security in the application.properties file

# in pom.xml file locate the commented lines and do it

<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
<modelVersion>4.0.0</modelVersion>
<parent>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-parent</artifactId>
<version>3.3.4</version>
<relativePath/>
</parent>
<groupId>com.mackodev</groupId>
<artifactId>shirt-multivendor</artifactId>
<version>0.0.1-SNAPSHOT</version>
<name>shirt-multivendor</name>
<description>shirt multivendor</description>
<url/>
<licenses>
<license/>
</licenses>
<developers>
<developer/>
</developers>
<scm>
<connection/>
<developerConnection/>
<tag/>
<url/>
</scm>
<properties>
<java.version>17</java.version>
</properties>
<dependencies>
<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!--		<dependency>-->
<!--			<groupId>org.springframework.boot</groupId>-->
<!--			<artifactId>spring-boot-starter-security</artifactId>-->
<!--		</dependency>-->

    	<dependency>
    		<groupId>org.springframework.boot</groupId>
    		<artifactId>spring-boot-starter-web</artifactId>
    	</dependency>

    	<dependency>
    		<groupId>org.springframework.boot</groupId>
    		<artifactId>spring-boot-devtools</artifactId>
    		<scope>runtime</scope>
    		<optional>true</optional>
    	</dependency>
    	<dependency>
    		<groupId>com.mysql</groupId>
    		<artifactId>mysql-connector-j</artifactId>
    		<scope>runtime</scope>
    	</dependency>
    	<dependency>
    		<groupId>org.projectlombok</groupId>
    		<artifactId>lombok</artifactId>
    		<optional>true</optional>
    	</dependency>
    		<dependency>
    		<groupId>org.springframework.boot</groupId>
    		<artifactId>spring-boot-starter-test</artifactId>
    		<scope>test</scope>
    	</dependency>

<!--		<dependency>-->
<!--			<groupId>org.springframework.security</groupId>-->
<!--			<artifactId>spring-security-test</artifactId>-->
<!--			<scope>test</scope>-->
<!--		</dependency>-->

    </dependencies>

    <build>
    	<plugins>
    		<plugin>
    			<groupId>org.apache.maven.plugins</groupId>
    			<artifactId>maven-compiler-plugin</artifactId>
    			<configuration>
    				<annotationProcessorPaths>
    					<path>
    						<groupId>org.projectlombok</groupId>
    						<artifactId>lombok</artifactId>
    						<version>${lombok.version}</version>
    					</path>
    				</annotationProcessorPaths>
    			</configuration>
    		</plugin>
    		<plugin>
    			<groupId>org.springframework.boot</groupId>
    			<artifactId>spring-boot-maven-plugin</artifactId>
    			<configuration>
    				<excludes>
    					<exclude>
    						<groupId>org.projectlombok</groupId>
    						<artifactId>lombok</artifactId>
    					</exclude>
    				</excludes>
    			</configuration>
    		</plugin>
    	</plugins>
    </build>

</project>

# now we can run the application and see the result in the browser

# downgrade the spring boot version to 3.3.4 in the pom.xml file

# update the server port to 5454 in the application.properties file

spring.application.name=shirt-multivendor

server.port=5454

spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/shirt_ecommerce
spring.datasource.username=root
spring.datasource.password=new_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql: true

# now atlast we created our first api

# then uncomment all the commented lines in the pom.xml file

# next lets create entity model

# next we will create a user entity and a user repository

# in com.mackodev/modal/User.java

package com.mackodev.modal;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

// this is for our primary key
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String email;

    private String fullName;

    private String mobile;

    private String role;

}

# then create a new package under com.mackodev/domain called class USER_ROLE.java

package com.mackodev.domain;

public enum USER_ROLE {

    ROLE_ADMIN,

    ROLE_CUSTOMER,
    ROLE_SELLER

}

# then update User.java file

package com.mackodev.modal;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mackodev.domain.USER_ROLE;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.HashSet;
import java.util.Set;

@Entity
public class User {

// this is for our primary key
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String email;

    private String fullName;

    private String mobile;

    private USER_ROLE role = USER_ROLE.ROLE_CUSTOMER;

    private Set<Address> addresses = new HashSet<>();

    private Set<Coupon> usedCoupons = new HashSet<>();

}

# then this part hover then click import option class

private Set<Address> addresses = new HashSet<>();

# same as this part

    private Set<Coupon> usedCoupons = new HashSet<>();

# then add each one of the file JPA Entity

# in modal/Address.java

package com.mackodev.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.\*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String locality;

    private String address;

    private String city;

    private String state;

    private String pinCode;

    private String mobile;

}

# also add import to User.java file and also their relations

package com.mackodev.modal;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mackodev.domain.USER_ROLE;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.\*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class User {

// this is for our primary key
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String email;

    private String fullName;

    private String mobile;

    private USER_ROLE role = USER_ROLE.ROLE_CUSTOMER;

    @OneToMany
    private Set<Address> addresses = new HashSet<>();

    @ManyToMany
    @JsonIgnore
    private Set<Coupon> usedCoupons = new HashSet<>();

}

# then lets create the coupon entity in modal/Coupon.java

package com.mackodev.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.\*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Coupon {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String code;

    private double discountPercentage;

    private LocalDate validityStartDate;

    private LocalDate validityEndDate;

    private double minimumOrderValue;

    private boolean isActive = true;

    @ManyToMany(mappedBy = "usedCoupons")
    private Set<User> usedByUsers = new HashSet<>();

}

# continue creating the entity

# add modal/Cart.java

package com.mackodev.modal;

import jakarta.persistence._;
import lombok._;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private User user;

    private Set<CartItem> cartItems = new HashSet<>();

    private double totalSellingPrice;

    private int totalItem;

    private int totalMrpPrice;

    private int discount;

    private String couponCode;

}

# then this part hover then click import option class

private Set<CartItem> cartItems = new HashSet<>();

# modal/CartItem.java

package com.mackodev.modal;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence._;
import lombok._;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JsonIgnore
    private Cart cart;

    private Product product;

    private String size;

    private int quantity = 1;

    private Integer mrpPrice;

    private Integer sellingPrice;

    private Long userId;

}

# then this part hover then click import option class

    private Product product;

# then go back to modal/Cart.java and add relation

    @OneToOne
    private User user;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CartItem> cartItems = new HashSet<>();

# then lets finish the entity for product

# in modal/Product.java

package com.mackodev.modal;

import jakarta.persistence._;
import lombok._;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    private String description;

    private int mrpPrice;

    private int sellingPrice;

    private int discountPercent;

    private int quantity;

    private String color;

    @ElementCollection
    private List<String> images = new ArrayList<>();

    private int numRatings;

    @ManyToOne
    private Category category;

    @ManyToOne
    private Seller seller;

    private LocalDateTime createdAt;

    // @ElementCollection
    private String Sizes;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>();

}

# then this part hover then click import option class

    @ManyToOne
    private Category category;

    @ManyToOne
    private Seller seller;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>();

# then lets create the Category entity in modal/Category.java

package com.mackodev.modal;

import jakarta.persistence._;
import jakarta.validation.constraints.NotNull;
import lombok._;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @NotNull
    @Column(unique = true)
    private String categoryId;

    @ManyToOne
    private Category parentCategory;

    @NotNull
    private Integer level;

}

# intall the dependency spring-boot-starter-validation in the pom.xml file

# we can go to https://start.spring.io/ and generate the project and add the dependency and then update/sync the pom.xml file

# then create the Review entity in modal/Review.java

package com.mackodev.modal;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence._;
import lombok._;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String reviewText;

    @Column(nullable = false)
    private double rating;

    @ElementCollection
    private List<String> productImages;

    @JsonIgnore
    @ManyToOne
    @Column(nullable = false)
    private Product product;

    @ManyToOne
    @Column(nullable = false)
    private User user;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

}

# then create the Seller entity in modal/Seller.java

package com.mackodev.modal;

import com.mackodev.domain.AccountStatus;
import com.mackodev.domain.USER*ROLE;
import jakarta.persistence.*;
import lombok.\_;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String sellerName;

    private String mobile;

    @Column(unique = true, nullable = false)
    private String email;

    private String password;

    @Embedded
    private BusinessDetails businessDetails = new BusinessDetails();

    @Embedded
    private BankDetails bankDetails = new BankDetails();

    @OneToOne(cascade = CascadeType.ALL)
    private Address pickupAddress = new Address();

    private String GSTIN;

    private USER_ROLE role = USER_ROLE.ROLE_SELLER;

    private boolean isEmailVerified = false;

    private AccountStatus accountStatus = AccountStatus.PENDING_VERIFICATION;

}

# then create the AccountStatus enum in domain/AccountStatus.java

package com.mackodev.domain;

public enum AccountStatus {

    PENDING_VERIFICATION,   // Account is created but not yet verified
    ACTIVE,                 // Account is active and in good standing
    SUSPENDED,              // Account is temporarily suspended, possibly due to violations
    DEACTIVATED,            // Account is deactivated, user may have chosen to deactivate it
    BANNED,                 // Account is permanently banned due to severe violations
    CLOSED,                 // Account is permanently closed, possibly at user request

}

# then create the BankDetails in modal/BankDetails.java

package com.mackodev.modal;

import lombok.Data;

@Data
public class BankDetails {

    private String accountNumber;
    private String accountHolderName;

// private String accountNumber;
private String ifscCode;
}

# then create the BusinessDetails in modal/BusinessDetails.java

package com.mackodev.modal;

import lombok.Data;

@Data
public class BusinessDetails {

    private String businessName;
    private String businessEmail;
    private String businessMobile;
    private String businessAddress;
    private String logo;
    private String banner;

}

# then lets create class for order entity in modal/Order.java

package com.mackodev.modal;

import com.mackodev.domain.OrderStatus;
import com.mackodev.domain.PaymentStatus;
import jakarta.persistence._;
import lombok._;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String orderId;

    @ManyToOne
    private User user;

    private Long sellerId;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems = new ArrayList<>();

    @ManyToOne
    private Address shippingAddress;

    @Embedded
    private PaymentDetails paymentDetails = new PaymentDetails();

    private double totalMrpPrice;

    private Integer totalSellingPrice;

    private Integer discount;

    private OrderStatus orderStatus;

    private int totalItem;

    private PaymentStatus paymentStatus = PaymentStatus.PENDING;

    private LocalDateTime orderDate = LocalDateTime.now();
    private LocalDateTime deliverDate = orderDate.plusDays(7);

}

# create class for PaymentDetails in modal/PaymentDetails.java

package com.mackodev.modal;

public class PaymentDetails {
}

# create class for OrderItem in modal/OrderItem.java

package com.mackodev.modal;

public class OrderItem {
}

# create enum for OrderStatus in domain/OrderStatus.java

package com.mackodev.domain;

public enum OrderStatus {
PENDING,
PLACED,
CONFIRMED,
SHIPPED,
DELIVERED,
CANCELLED
}

# create enum for PaymentStatus in domain/PaymentStatus.java

package com.mackodev.domain;

public enum PaymentStatus {

    PENDING,
    PROCESSING,
    COMPLETED,
    FAILED

}

# then create the entity for oderItem in modal/OrderItem.java

package com.mackodev.modal;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence._;
import lombok._;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @JsonIgnore
    @ManyToOne
    private Order order;

    @ManyToOne
    private Product product;

    private String size;

    private int quantity;

    private Integer mrpPrice;

    private Integer sellingPrice;

    private Long userId;

}

# then create the entity for paymentDetails in modal/PaymentDetails.java

package com.mackodev.modal;

import com.mackodev.domain.PaymentStatus;
import lombok.Data;

@Data
public class PaymentDetails {
private String paymentId;
private String razorPaymentLinkId;
private String razorPaymentLinkReferenceId;
private String razorPaymentLinkStatus;
private String razorPaymentIdZWSP;
private PaymentStatus status;
}

# lets create the entity class for wishlist in modal/Wishlist.java

package com.mackodev.modal;

import jakarta.persistence._;
import lombok._;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Wishlist {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private User user;

    @ManyToMany
    private Set<Product> products = new HashSet<>();

}

# next lets create the entity class for transaction in modal/Transaction.java

package com.mackodev.modal;

import jakarta.persistence._;
import lombok._;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User customer;

    @OneToOne
    private Order order;

    @ManyToOne
    private Seller seller;

    private LocalDateTime date = LocalDateTime.now();

}

# then lets create the entity class for VerificationCode in modal/VerificationCode.java

package com.mackodev.modal;

import jakarta.persistence._;
import lombok._;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class VerificationCode {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String otp;

    private String email;

    @OneToOne
    private User user;

    @OneToOne
    private Seller seller;

}

# then create the entity class for SellerReport in modal/SellerReport.java

package com.mackodev.modal;

import jakarta.persistence._;
import lombok._;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SellerReport {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private Seller seller;

    private Long totalEarnings = 0L;

    private Long totalSales = 0L;

    private Long totalRefunds = 0L;

    private Long totalTax = 0L;

    private Long netEarnings = 0L;

    private Integer totalOrders = 0;

    private Integer canceledOrders = 0;

    private Integer totalTransactions = 0;

}

# then create the entity class for PaymentOrder in modal/PaymentOrder.java

package com.mackodev.modal;

import com.mackodev.domain.PaymentMethod;
import com.mackodev.domain.PaymentOrderStatus;
import jakarta.persistence._;
import lombok._;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class PaymentOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long amount;

    private PaymentOrderStatus status = PaymentOrderStatus.PENDING;

    private PaymentMethod paymentMethod;

    private String paymentLinkId;

    @ManyToOne
    private User user;

    @OneToMany
    private Set<Order> orders = new HashSet<>();

}

# also create the entity enum for PaymentOrderStatus in domain/PaymentOrderStatus.java

package com.mackodev.domain;

public enum PaymentOrderStatus {
PENDING, SUCCESS, FAILED
}

# also create the entity class for PaymentMethod in modal/PaymentMethod.java

package com.mackodev.domain;

public enum PaymentMethod {
RAZORPAY,
STRIPE
}

# NEXT lets create the entity class for HomeCategory in modal/HomeCategory.java

package com.mackodev.modal;

import com.mackodev.domain.HomeCategorySection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.\*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class HomeCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String image;
    private String categoryId;
    private HomeCategorySection section;

}

# and then create the enum for HomeCategorySection in domain/HomeCategorySection.java

package com.mackodev.domain;

public enum HomeCategorySection {

    ELECTRIC_CATEGORIES,
    GRID,
    SHOP_BY_CATEGORIES,
    DEALS

}

# next lets create the class for Home in modal/Home.java

package com.mackodev.modal;

import java.util.List;

public class Home {

    private List<HomeCategory> grid;

    private List<HomeCategory> shopByCategories;

    private List<HomeCategory> electricCategories;

    private List<HomeCategory> dealCategories;

    private List<Deal> deals;

}

# then create the entity class for Deal in modal/Deal.java

package com.mackodev.modal;

import jakarta.persistence._;
import lombok._;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Deal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Integer discount;

    @OneToOne
    private HomeCategory category;

}

## NEXT LETS EMPLEMENT THE LOGIN SIGNUP SYSTEM BUT BEFORE THAT LETS FIX SOME ERROR WHEN WE TRY TO RUN THE APPLICATION

# in Review.java, remove the @Column

    @JsonIgnore
    @ManyToOne
    private Product product;

    @ManyToOne
    private User user;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

}

# in Product.java, remove the @EqualsAndHashCode

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {

# in CartItem.java, add relation we forgot

    @ManyToOne
    @JsonIgnore
    private Cart cart;

    @ManyToOne
    private Product product;

    private String size;

# on Order.java add this

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Table(name = "orders")
public class Order {

# AND THIS SHOULD SOLVE THE ERROR AND WE CAN RUN THE APPLICATION

# AND LETS GO TO THE LOGIN SIGNUP SYSTEM

# first create a new package called service inside the com.mackodev

# then inside of it another package called impl so the full path should be com.mackodev.service.impl

# then create a new class called AuthService.java inside the service package, it will be package com.mackodev.service; not package com.mackodev.service.impl;

package com.mackodev.service;

public class AuthService {
}

## NEXT LETS CREATE THE CONTROLLER FOR AUTHENTICATION

# in controller package create a new class called AuthController.java and for now this is our initial code

package com.mackodev.controller;

import com.mackodev.modal.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    public ResponseEntity<User> createUserHandler(){
        return null;
    }

}

# then in response package create a new class called SignupRequest.java

package com.mackodev.response;

import lombok.Data;

@Data
public class SignupRequest {
private String email;
private String fullName;
private String otp;
}

# THEN CREATE A NEW PACKAGE INSIDE THE COM.MACCODEV PACKAGE CALLED repository

# then create a new interface called UserRepository.java inside the repository package

package com.mackodev.repository;

import com.mackodev.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}

# and then in order to add user to our database add code to AuthController.java

package com.mackodev.controller;

import com.mackodev.modal.User;
import com.mackodev.repository.UserRepository;
import com.mackodev.response.SignupRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<User> createUserHandler(@RequestBody SignupRequest req){

        User user = new User();
        user.setEmail(req.getEmail());
        user.setFullName(req.getFullName());

        User savedUser = userRepository.save(user);

        return ResponseEntity.ok(savedUser);
    }

}

## THEN IN POSTMAN TEST THE POST API

# create user

http://localhost:5454/auth/signup

Body => raw => json
{
"fullName":"marcko",
"email":"marckfriencecoto@gmail.com"
}

# the response json should be like this

{
"id": 1,
"email": "marckfriencecoto@gmail.com",
"fullName": "marcko",
"mobile": null,
"role": "ROLE_CUSTOMER",
"addresses": []
}

## and this should create a user in our database

## NEXT LETS CONFIGURE OUR SPRING SECURITY

# in com.mackodev create a new package called config

# inside the config package create a new class called AppConfig.java

package com.mackodev.config;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Collections;

@Configuration
@EnableWebSecurity
public class AppConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.sessionManagement(management->management.sessionCreationPolicy(
                SessionCreationPolicy.STATELESS
        )).authorizeRequests(authorize->authorize
                .requestMatchers("/api/**").authenticated()
                .requestMatchers("/api/products/*/reviews").permitAll()
                .anyRequest().permitAll()
        ).addFilterBefore(new JwtTokenValidator(), BasicAuthenticationFilter.class)
                .csrf(csrf->csrf.disable())
                .cors(cors->cors.configurationSource(corsConfigurationSource()));
        return http.build();
    }

    private CorsConfigurationSource corsConfigurationSource() {
        return new CorsConfigurationSource() {
            @Override
            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {

                CorsConfiguration cfg = new CorsConfiguration();
                cfg.setAllowedOrigins(Collections.singletonList("*"));
                cfg.setAllowedMethods(Collections.singletonList("*"));
                cfg.setAllowedHeaders(Collections.singletonList("*"));
                cfg.setAllowCredentials(true);
                cfg.setExposedHeaders(Collections.singletonList("Authorization"));
                cfg.setMaxAge(3600l);
                return cfg;
            }
        };
    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }

}

# notice this line

).addFilterBefore(new JwtTokenValidator(), BasicAuthenticationFilter.class)

## THE VIDEO SHOWS POM.XML CODE HERE 3:24

## ADD THIS DEPENDENCIES TO THE POM.XML FILE

<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
		</dependency>

    	<dependency>
    		<groupId>io.jsonwebtoken</groupId>
    		<artifactId>jjwt-api</artifactId>
    		<version>0.11.1</version>
    	</dependency>
    	<dependency>
    		<groupId>io.jsonwebtoken</groupId>
    		<artifactId>jjwt-impl</artifactId>
    		<version>0.11.1</version>
    		<scope>runtime</scope>
    	</dependency>
    	<dependency>
    		<groupId>io.jsonwebtoken</groupId>
    		<artifactId>jjwt-jackson</artifactId>
    		<version>0.11.1</version>
    		<scope>runtime</scope>
    	</dependency>

    	<dependency>
    		<groupId>org.springframework.boot</groupId>
    		<artifactId>spring-boot-starter-mail</artifactId>
    	</dependency>
    </dependencies>

# create it a new class called JwtTokenValidator.java inside the config package

package com.mackodev.config;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class JwtTokenValidator extends OncePerRequestFilter {
@Override
protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
String jwt = request.getHeader("Authorization");
}
}

# then create a new class called JWT_CONSTANT.java inside the config package

package com.mackodev.config;

public class JWT_CONSTANT {
public static final String SECRET_KEY = "sadasrewqrgewrweqrwasdsadferwgerewqtewqewewq";
public static final String JWT_SECRET = "Authorization";
}

# then continue the JwtTokenValidator.java

package com.mackodev.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.util.List;

public class JwtTokenValidator extends OncePerRequestFilter {
@Override
protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
String jwt = request.getHeader("Authorization");

// Bearer jwt
if (jwt != null) {
jwt = jwt.substring(7);
try {
SecretKey key = Keys.hmacShaKeyFor(JWT_CONSTANT.SECRET_KEY.getBytes());
Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();

                String email = String.valueOf(claims.get("email"));
                String authorities = String.valueOf(claims.get("authorities"));

                List<GrantedAuthority> auths = AuthorityUtils
                        .commaSeparatedStringToAuthorityList(authorities);
                Authentication authentication = new UsernamePasswordAuthenticationToken(email, null, auths);

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
            catch (Exception e) {
                throw new BadCredentialsException("Invalid JWT token...");
            }
        }

        filterChain.doFilter(request, response);
    }

}

# then create a new class called JwtProvider.java inside the config package

package com.mackodev.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Service
public class JwtProvider {

    SecretKey key = Keys.hmacShaKeyFor(JWT_CONSTANT.SECRET_KEY.getBytes());

    public String generateToken(Authentication auth) {
        Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();
        String roles = populateAuthorities(authorities);

        return Jwts.builder()
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime()+86400000))
                .claim("email", auth.getName())
                .claim("authorities", roles)
                .signWith(key)
                .compact();
    }

    public String getEmailFromJwtToken(String jwt) {
        jwt = jwt.substring(7);

        Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();

        return String.valueOf(claims.get("email"));
    }

    private String populateAuthorities(Collection<? extends GrantedAuthority> authorities) {
        Set<String> auths = new HashSet<>();

        for (GrantedAuthority authority:authorities) {
            auths.add(authority.getAuthority());
        }

        return String.join(",", auths);
    }

}

## then goto service/AuthService.java and make it interface

package com.mackodev.service;

import com.mackodev.response.SignupRequest;

public interface AuthService {

    String createUser(SignupRequest req);

}

# then create a new class called AuthServiceImpl.java inside the service.impl package

package com.mackodev.service.impl;

import com.mackodev.repository.UserRepository;
import com.mackodev.response.SignupRequest;
import com.mackodev.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
private final UserRepository userRepository;

    @Override
    public String createUser(SignupRequest req) {
        return "";
    }

}

## then goto repository package in UserRepository.java

package com.mackodev.repository;

import com.mackodev.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

}

## then back to UserRepository.java we can now use the findByEmail method to find the user by email

package com.mackodev.service.impl;

import com.mackodev.domain.USER_ROLE;
import com.mackodev.modal.User;
import com.mackodev.repository.UserRepository;
import com.mackodev.response.SignupRequest;
import com.mackodev.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
private final UserRepository userRepository;
private final PasswordEncoder passwordEncoder;

    @Override
    public String createUser(SignupRequest req) {

        User user = userRepository.findByEmail(req.getEmail());

        if (user == null) {
            User createdUser = new User();
            createdUser.setEmail(req.getEmail());
            createdUser.setFullName(req.getFullName());
            createdUser.setRole(USER_ROLE.ROLE_CUSTOMER);
            createdUser.setMobile("093465489764");
            createdUser.setPassword(passwordEncoder.encode(req.getOtp()));

            user = userRepository.save(createdUser);
        }
        return "";
    }

}

# then we can also add the cart to the user

# in CartRepository.java add the following code

package com.mackodev.repository;

import com.mackodev.modal.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}

# then back to AuthServiceImpl.java

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CartRepository cartRepository;

    @Override
    public String createUser(SignupRequest req) {

        User user = userRepository.findByEmail(req.getEmail());

        if (user == null) {
            User createdUser = new User();
            createdUser.setEmail(req.getEmail());
            createdUser.setFullName(req.getFullName());
            createdUser.setRole(USER_ROLE.ROLE_CUSTOMER);
            createdUser.setMobile("093465489764");
            createdUser.setPassword(passwordEncoder.encode(req.getOtp()));

            user = userRepository.save(createdUser);

            Cart cart = new Cart();
            cart.setUser(user);
            cartRepository.save(cart);
        }
        return "";
    }

}

# then next generate the jwt token for this user in the same class file

public class AuthServiceImpl implements AuthService {
private final UserRepository userRepository;
private final PasswordEncoder passwordEncoder;
private final CartRepository cartRepository;
private final JwtProvider jwtProvider;

---

            Cart cart = new Cart();
            cart.setUser(user);
            cartRepository.save(cart);
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(USER_ROLE.ROLE_CUSTOMER.toString()));

        Authentication authentication = new UsernamePasswordAuthenticationToken(req.getEmail(), null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return jwtProvider.generateToken(authentication);
    }

}

# then lets create a response class called AuthResponse.java inside the response package

package com.mackodev.response;

import com.mackodev.domain.USER_ROLE;
import lombok.Data;

@Data
public class AuthResponse {
private String jwt;
private String message;
private USER_ROLE role;
}

# then goto AuthController.java EDIT THE CODE

package com.mackodev.controller;

import com.mackodev.domain.USER_ROLE;
import com.mackodev.modal.User;
import com.mackodev.repository.UserRepository;
import com.mackodev.response.AuthResponse;
import com.mackodev.response.SignupRequest;
import com.mackodev.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody SignupRequest req){

        String jwt = authService.createUser(req);

        AuthResponse res = new AuthResponse();
        res.setJwt(jwt);
        res.setMessage("register success");
        res.setRole(USER_ROLE.ROLE_CUSTOMER);

        return ResponseEntity.ok(res);
    }

}

# then play in postman same post request as before

but the raw json should be like this
{
"fullName":"marcko2",
"email":"marckfriencecoto2@gmail.com",
"otp":"123456"
}

# and it will response 401 unauthorized

# but when we send request again it will response rawPassword cannot be null

# to fix this error create a new class called CustomUserServiceImpl.java inside the service.impl package

package com.mackodev.service.impl;

import com.mackodev.domain.USER_ROLE;
import com.mackodev.modal.User;
import com.mackodev.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
public class CustomUserServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;
    private static final String SELLER_PREFIX = "seller";

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (username.startsWith(SELLER_PREFIX)) {

        } else {
            User user = userRepository.findByEmail(username);
            if (user != null) {
                return buildUserDetails(user.getEmail(), user.getPassword(), user.getRole());
            }
        }

        throw new UsernameNotFoundException("user or seller not found with email - " + username);
    }

    private UserDetails buildUserDetails(String email, String password, USER_ROLE role) {
        if (role == null) role = USER_ROLE.ROLE_CUSTOMER;

        List<GrantedAuthority> authorityList = new ArrayList<>();
        authorityList.add(new SimpleGrantedAuthority("ROLE" + role));

        return new org.springframework.security.core.userdetails.User(email, password, authorityList);
    }

}

# then create a new repository called SellerRepository.java inside the repository package

package com.mackodev.repository;

import com.mackodev.modal.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long> {
Seller findByEmail(String email);

}

# then go back to CustomUserServiceImpl.java add this code

@RequiredArgsConstructor
@Service
public class CustomUserServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;
    private final SellerRepository sellerRepository;
    private static final String SELLER_PREFIX = "seller";

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (username.startsWith(SELLER_PREFIX)) {
            String actualUsername = username.substring(SELLER_PREFIX.length());
            Seller seller = sellerRepository.findByEmail(actualUsername);

            if (seller != null) {
                return buildUserDetails(seller.getEmail(), seller.getPassword(), seller.getRole());
            }
        } else {
            User user = userRepository.findByEmail(username);
            if (user != null) {
                return buildUserDetails(user.getEmail(), user.getPassword(), user.getRole());
            }
        }

        throw new UsernameNotFoundException("user or seller not found with email - " + username);
    }

# then try to sent request in postman, with this json

{
"fullName":"marcko2",
"email":"marckfriencecoto2@gmail.com",
"otp":"123456"
}

# it will response 200 ok

# but as we can notice the user can login with hes own typed otp this is not good, the system should send otp to the user email and the user should login with the otp, thats when the time the system create a new user

# to fix this error we need to create a new class called OtpService.java inside the service package

# then goto your email provider and create a new app password for the email that you want to send the otp to

# int application.properties file add this code

spring.application.name=shirt-multivendor

server.port=5454

spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/shirt_ecommerce
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql: true

spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=marckfriencecoto@gmail.com
spring.mail.password=kiho xivq tosc zexw
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

# then create a new class service called EmailService.java inside the service package to send the otp to the user email

package com.mackodev.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender javaMailSender;

    public void sendVerificationOtpEmail(String userEmail, String otp, String subject, String text) throws MessagingException {
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(
                    mimeMessage, "utf-8"
            );

            mimeMessageHelper.setSubject(subject);
            mimeMessageHelper.setText(text);
            mimeMessageHelper.setTo(userEmail);
            javaMailSender.send(mimeMessage);
        }
        catch (MailException e) {
            throw new MailSendException("Failed to send email");
        }
    }

}

# to create a verification code to our database lets create a new class repository called VerificationCodeRepository.java inside the repository package

package com.mackodev.repository;

import com.mackodev.modal.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long> {

    VerificationCode findByEmail(String email);

}

# then goto AuthServiceImpl.java add this code

    private final CartRepository cartRepository;
    private final JwtProvider jwtProvider;
    private final VerificationCodeRepository verificationCodeRepository;

    @Override
    public String createUser(SignupRequest req) throws Exception {

        VerificationCode verificationCode = verificationCodeRepository.findByEmail(req.getEmail());

        if (verificationCode == null || !verificationCode.getOtp().equals(req.getOtp())) {
            throw new Exception("Wrong otp...");
        }

        User user = userRepository.findByEmail(req.getEmail());

        if (user == null) {
            User createdUser = new User();

# in AuthController.java add this code

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody SignupRequest req) throws Exception {

        String jwt = authService.createUser(req);

        AuthResponse res = new AuthResponse();

# then try to sent request in postman, with this json

{
"fullName":"marcko2",
"email":"marckfriencecoto2@gmail.com",
"otp":"123456"
}

# it will response 500 Internal Server Error

# wrong otp

# this is right!

# we need to add code to send the otp to the user email in AuthService.java

package com.mackodev.service;

import com.mackodev.response.SignupRequest;

public interface AuthService {

    void sentLoginOtp(String email);
    String createUser(SignupRequest req) throws Exception;

}

# click the 1 related problem on the same file AuthService.java

# it will goto AuthServiceImpl.java

# then hover to AuthServiceImpl with error and implement methods

private final JwtProvider jwtProvider;
private final VerificationCodeRepository verificationCodeRepository;

    @Override
    public void sentLoginOtp(String email) throws Exception {
        String SIGNING_PREFIX = "signin_";

        if (email.startsWith(SIGNING_PREFIX)) {
            email = email.substring(SIGNING_PREFIX.length());

            User user = userRepository.findByEmail(email);
            if (user == null) {
                throw new Exception("User does not exist with provided email");
            }
        }

        VerificationCode isExist = verificationCodeRepository.findByEmail(email);

        if (isExist != null) {
            verificationCodeRepository.delete(isExist);
        }

    }

    @Override
    public String createUser(SignupRequest req) throws Exception {

# lets create a utility to generate the otp

# create a new package called utils in com.mackodev

# create a new class called OtpUtil.java inside the utils package

package com.mackodev.utils;

import java.util.Random;

public class OtpUtil {

    public static String generateOtp() {
        int otpLength = 6;

        Random random = new Random();

        StringBuilder otp = new StringBuilder(otpLength);

        for (int i = 0; i < otpLength; i++) {
            otp.append(random.nextInt(10));
        }
        return otp.toString();
    }

}

# then back to AuthServiceImpl.java add this code

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CartRepository cartRepository;
    private final JwtProvider jwtProvider;
    private final VerificationCodeRepository verificationCodeRepository;
    private final EmailService emailService;

    @Override
    public void sentLoginOtp(String email) throws Exception {
        String SIGNING_PREFIX = "signin_";

        if (email.startsWith(SIGNING_PREFIX)) {
            email = email.substring(SIGNING_PREFIX.length());

            User user = userRepository.findByEmail(email);
            if (user == null) {
                throw new Exception("User does not exist with provided email");
            }
        }

        VerificationCode isExist = verificationCodeRepository.findByEmail(email);

        if (isExist != null) {
            verificationCodeRepository.delete(isExist);
        }

        String otp = OtpUtil.generateOtp();

        VerificationCode verificationCode = new VerificationCode();
        verificationCode.setOtp(otp);
        verificationCode.setEmail(email);
        verificationCodeRepository.save(verificationCode);

        String subject = "Juan Graphico - Login/Signup OTP";
        String text = "Dear User,\n\nYour One-Time Password (OTP) for login/signup is: {OTP}. Please use this code to complete your authentication. \n\nIf you did not request this code, please ignore this message.\n\nBest regards,\nThe Juan Graphico Team";

        emailService.sendVerificationOtpEmail(email, otp, subject, text);

    }

    @Override
    public String createUser(SignupRequest req) throws Exception {

## then add function controller to sent the otp to the user email in AuthController.java

        return ResponseEntity.ok(res);
    }

    @PostMapping("/sent/login-signup-otp")
    public ResponseEntity<ApiResponse> sentOtpHandler(@RequestBody VerificationCode req) throws Exception {

        authService.sentLoginOtp(req.getEmail());

        ApiResponse res = new ApiResponse();

        res.setMessage("Otp sent successfully");

        return ResponseEntity.ok(res);
    }

}

# then try to sent request in postman, with this json

# create a new post request named sent otp in postman with this url

http://localhost:5454/auth/sent/login-signup-otp

raw json body
{
"email":"danaolumad@gmail.com"
}

# it will response 200 ok

# Otp sent successfully

# but if we check the email we sent the otp to, we will not see the otp

# goto AuthServiceImpl.java and add this code

        String subject = "Juan Graphico - Login/Signup OTP";
        String text = "Dear User,\n\nYour One-Time Password (OTP) for login/signup is: " + otp + "\n\nPlease use this code to complete your authentication. \n\nIf you did not request this code, please ignore this message.\n\nBest regards,\nThe Juan Graphico Team";

# then try to sent request in postman, with this json

# create a new post request named sent otp in postman with this url

http://localhost:5454/auth/sent/login-signup-otp

raw json body
{
"email":"danaolumad@gmail.com"
}

# it will response 200 ok

# Otp sent successfully

# if you go back to postman create user request, and used the otp

# it will register successfully

## NEXT LETS ADD THE LOGIN FUNCTIONALITY

# in AuthService.java add this code

package com.mackodev.service;

import com.mackodev.request.LoginRequest;
import com.mackodev.response.AuthResponse;
import com.mackodev.response.SignupRequest;

public interface AuthService {

    void sentLoginOtp(String email) throws Exception;
    String createUser(SignupRequest req) throws Exception;
    AuthResponse signing(LoginRequest req);

}

# then create the LoginRequest.java inside the request package

package com.mackodev.request;

import lombok.Data;

@Data
public class LoginRequest {
private String email;
private String otp;
}

# then in AuthServiceImpl.java hover the public class AuthServiceImpl and implement the methods

    private final VerificationCodeRepository verificationCodeRepository;
    private final EmailService emailService;
    private final CustomUserServiceImpl customUserService;

---

        return jwtProvider.generateToken(authentication);
    }


    @Override
    public AuthResponse signing(LoginRequest req) {
        String username = req.getEmail();
        String otp = req.getOtp();

        Authentication authentication = authenticate(username, otp);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.generateToken(authentication);

        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setMessage("Login Successfully");

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        String roleName = authorities.isEmpty() ? null : authorities.iterator().next().getAuthority();

        authResponse.setRole(USER_ROLE.valueOf(roleName));
        return authResponse;
    }

    private Authentication authenticate(String username, String otp) {
        UserDetails userDetails = customUserService.loadUserByUsername(username);

        if (userDetails == null) {
            throw new BadCredentialsException("Invalid credentials provided.");
        }

        VerificationCode verificationCode = verificationCodeRepository.findByEmail(username);

        if (verificationCode == null || !verificationCode.getOtp().equals(otp)) {
            throw new BadCredentialsException("The OTP you entered is invalid. Please try again.");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }

}

# then lets create the endpoint for the login in AuthController.java

        res.setMessage("Otp sent successfully");

        return ResponseEntity.ok(res);
    }

    @PostMapping("/signing")
    public ResponseEntity<AuthResponse> loginHandler(@RequestBody LoginRequest req) throws Exception {

        AuthResponse authResponse = authService.signing(req);

        return ResponseEntity.ok(authResponse);
    }

}

# then create a new post request named login in postman with this url

http://localhost:5454/auth/signing

raw json body
{
"email":"danaolumad@gmail.com",
"otp":"632160"
}

# it will response 500 Internal Server Error

"message": "No enum constant com.mackodev.domain.USER_ROLE.ROLEROLE_CUSTOMER",

# to solve this in CustomUserServiceImpl.java edit the code

        List<GrantedAuthority> authorityList = new ArrayList<>();
        authorityList.add(new SimpleGrantedAuthority(role.toString()));

        return new org.springframework.security.core.userdetails.User(email, password, authorityList);
    }

}

# then try to sent request in postman, with the same json

# it will response 200 ok

# Login Successfully

## THEN NEXT LETS CREATE THE USER SERVICE USING JWT TOKEN

# create a new interface called UserService.java inside the service package

package com.mackodev.service;

import com.mackodev.modal.User;

public interface UserService {

    User findUserByJwtToken(String jwt);
    User findUserByEmail(String email);

}

# then create a new class called UserServiceImpl.java inside the service.impl package

package com.mackodev.service.impl;

import com.mackodev.config.JwtProvider;
import com.mackodev.modal.User;
import com.mackodev.repository.UserRepository;
import com.mackodev.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceimpl implements UserService {

    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;

    @Override
    public User findUserByJwtToken(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt);

        return this.findUserByEmail(email);
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new Exception("No user found associated with the email: " + email);
        }
        return user;
    }

}

# then create a new class called UserController.java inside the controller package

package com.mackodev.controller;

import com.mackodev.modal.User;
import com.mackodev.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("users/profile")
    public ResponseEntity<User> createUserHandler(@RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        return ResponseEntity.ok(user);
    }

}

# then create a new request and try to sent get request in postman, with this url

# first sent otp request => get the token

# then signing request => get/copy the jwt token

# then in get user profile request, add the jwt token in the header, set the Authorization to Bearer Token, it will response 200 ok

http://localhost:5454/users/profile

{
"id": 52,
"email": "danaolumad@gmail.com",
"fullName": "danao",
"mobile": "093465489764",
"role": "ROLE_CUSTOMER",
"addresses": []
}

## THEN NEXT LETS CREATE SELLER SERVICE

## FIRST LETS CREATE ALL THE METHOD FOR SELLER SERVICE

# create a new interface called SellerService.java inside the service package

package com.mackodev.service;

import com.mackodev.domain.AccountStatus;
import com.mackodev.modal.Seller;

import java.util.List;

public interface SellerService {

    Seller getSellerProfile(String jwt);
    Seller createSeller(Seller seller);
    Seller getSellerById(Long id);
    Seller getSellerByEmail(String email);
    List<Seller> getAllSellers(AccountStatus status);
    Seller updateSeller(Long id, Seller seller);
    void deleteSeller(Long id);
    Seller verifyEmail(String email, String otp);
    Seller updateSellerAccountStatus(Long sellerId, AccountStatus status);

}

# then create the implementation

# create a new repository called AddressRepository.java inside the repository package

package com.mackodev.repository;

import com.mackodev.modal.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}

# then in SellerRepository.java add this code

package com.mackodev.repository;

import com.mackodev.domain.AccountStatus;
import com.mackodev.modal.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SellerRepository extends JpaRepository<Seller, Long> {
Seller findByEmail(String email);
List<Seller> findByAccountStatus(AccountStatus status);
}

# then in SellerServiceImpl.java implement all the methods functionality

package com.mackodev.service.impl;

import com.mackodev.config.JwtProvider;
import com.mackodev.domain.AccountStatus;
import com.mackodev.domain.USER_ROLE;
import com.mackodev.modal.Address;
import com.mackodev.modal.Seller;
import com.mackodev.repository.AddressRepository;
import com.mackodev.repository.SellerRepository;
import com.mackodev.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SellerServiceImpl implements SellerService {

    private final SellerRepository sellerRepository;
    private final JwtProvider jwtProvider;
    private final PasswordEncoder passwordEncoder;
    private final AddressRepository addressRepository;

    @Override
    public Seller getSellerProfile(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt);

        return this.getSellerByEmail(email);
    }

    @Override
    public Seller createSeller(Seller seller) throws Exception {
        Seller sellerExist = sellerRepository.findByEmail(seller.getEmail());

        if (sellerExist != null) {
            throw new Exception("Seller already exists. Please use a different email address.");
        }
        Address saveAddress = addressRepository.save(seller.getPickupAddress());

        Seller newSeller = new Seller();
        newSeller.setEmail(seller.getEmail());
        newSeller.setPassword(passwordEncoder.encode(seller.getPassword()));
        newSeller.setSellerName(seller.getSellerName());
        newSeller.setPickupAddress(saveAddress);
        newSeller.setGSTIN(seller.getGSTIN());
        newSeller.setRole(USER_ROLE.ROLE_SELLER);
        newSeller.setMobile(seller.getMobile());
        newSeller.setBankDetails(seller.getBankDetails());
        newSeller.setBusinessDetails(seller.getBusinessDetails());

        return sellerRepository.save(newSeller);
    }

    @Override
    public Seller getSellerById(Long id) throws Exception {

        return sellerRepository.findById(id).orElseThrow(()->new Exception("Seller not found with ID:" + id));
    }

    @Override
    public Seller getSellerByEmail(String email) throws Exception {
        Seller seller = sellerRepository.findByEmail(email);

        if (seller == null) {
            throw new Exception("Seller Not Found.");
        }

        return seller;
    }

    @Override
    public List<Seller> getAllSellers(AccountStatus status) {
        return sellerRepository.findByAccountStatus(status);
    }

    @Override
    public Seller updateSeller(Long id, Seller seller) throws Exception {
        Seller existingSeller = this.getSellerById(id);

        if (seller.getSellerName() != null) {
            existingSeller.setSellerName(seller.getSellerName());
        }
        if (seller.getMobile() != null) {
            existingSeller.setMobile(seller.getMobile());
        }
        if (seller.getEmail() != null) {
            existingSeller.setEmail(seller.getEmail());
        }

        if (seller.getBusinessDetails() != null && seller.getBusinessDetails().getBusinessName() != null) {
            existingSeller.getBusinessDetails().setBusinessName(
                    seller.getBusinessDetails().getBusinessName()
            );
        }

        if (seller.getBankDetails() != null
                && seller.getBankDetails().getAccountHolderName() != null
                && seller.getBankDetails().getIfscCode() != null
                && seller.getBankDetails().getAccountNumber() != null
        ) {

            existingSeller.getBankDetails().setAccountHolderName(
                    seller.getBankDetails().getAccountHolderName()
            );
            existingSeller.getBankDetails().setAccountNumber(
                    seller.getBankDetails().getAccountNumber()
            );
            existingSeller.getBankDetails().setIfscCode(
                    seller.getBankDetails().getIfscCode()
            );
        }
        if (seller.getPickupAddress() != null
                && seller.getPickupAddress().getAddress() != null
                && seller.getPickupAddress().getMobile() != null
                && seller.getPickupAddress().getCity() != null
                && seller.getPickupAddress().getState() != null
        ) {
            existingSeller.getPickupAddress()
                    .setAddress(seller.getPickupAddress().getAddress());
            existingSeller.getPickupAddress().setCity(seller.getPickupAddress().getCity());
            existingSeller.getPickupAddress().setState(seller.getPickupAddress().getState());
            existingSeller.getPickupAddress().setMobile(seller.getPickupAddress().getMobile());
            existingSeller.getPickupAddress().setPinCode(seller.getPickupAddress().getPinCode());
        }
        if (seller.getGSTIN() != null){
            existingSeller.setGSTIN(seller.getGSTIN());
        }

        return sellerRepository.save(existingSeller);
    }

    @Override
    public void deleteSeller(Long id) throws Exception {

        Seller seller = getSellerById(id);
        sellerRepository.delete(seller);

    }

    @Override
    public Seller verifyEmail(String email, String otp) throws Exception {
        Seller seller = getSellerByEmail(email);
        seller.setEmailVerified(true);
        return sellerRepository.save(seller);
    }

    @Override
    public Seller updateSellerAccountStatus(Long sellerId, AccountStatus status) throws Exception {
        Seller seller = getSellerById(sellerId);
        seller.setAccountStatus(status);
        return sellerRepository.save(seller);
    }

}

# then create a new class called SellerController.java inside the controller package

package com.mackodev.controller;

import com.mackodev.modal.VerificationCode;
import com.mackodev.repository.VerificationCodeRepository;
import com.mackodev.request.LoginRequest;
import com.mackodev.response.AuthResponse;
import com.mackodev.service.AuthService;
import com.mackodev.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sellers")
public class SellerController {
private final SellerService sellerService;
private final VerificationCodeRepository verificationCodeRepository;
private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginSeller(
            @RequestBody LoginRequest req

            ) throws Exception {

        String otp = req.getOtp();
        String email = req.getEmail();

// VerificationCode verificationCode = verificationCodeRepository.findByEmail(email);
// if (verificationCode == null || !verificationCode.getOtp().equals(req.getOtp())){
// throw new Exception("The provided OTP is incorrect. Please try again.");
// }

        req.setEmail("seller_" + email);
        AuthResponse authResponse = authService.signing(req);

        return ResponseEntity.ok(authResponse);

    }

}

# then goto AuthServiceImpl.java and add this code

package com.mackodev.service;

import com.mackodev.domain.USER_ROLE;
import com.mackodev.request.LoginRequest;
import com.mackodev.response.AuthResponse;
import com.mackodev.response.SignupRequest;

public interface AuthService {

    void sentLoginOtp(String email, USER_ROLE role) throws Exception;
    String createUser(SignupRequest req) throws Exception;
    AuthResponse signing(LoginRequest req);

}

# then click the 1 related problem it will redirect to AuthServiceImpl.java and edit the code

    public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final SellerRepository sellerRepository;
    private final PasswordEncoder passwordEncoder;
    private final CartRepository cartRepository;
    private final JwtProvider jwtProvider;
    private final VerificationCodeRepository verificationCodeRepository;
    private final EmailService emailService;
    private final CustomUserServiceImpl customUserService;

    @Override
    public void sentLoginOtp(String email, USER_ROLE role) throws Exception {
        String SIGNING_PREFIX = "signing_";

        if (email.startsWith(SIGNING_PREFIX)) {
            email = email.substring(SIGNING_PREFIX.length());

            if (role.equals(USER_ROLE.ROLE_SELLER)){
                Seller seller = sellerRepository.findByEmail(email);
                if (seller == null) {
                    throw new Exception("Seller not found for the provided email.");
                }
            }
            else {
                User user = userRepository.findByEmail(email);
                if (user == null) {
                    throw new Exception("User does not exist with provided email");
                }
            }

        }

# then create a new request named LoginOtpRequest.java inside the request package

package com.mackodev.request;

import com.mackodev.domain.USER_ROLE;
import lombok.Data;

@Data
public class LoginOtpRequest {
private String email;
private String otp;
private USER_ROLE role;
}

# then back to AuthController.java and edit the code in this part

    @PostMapping("/sent/login-signup-otp")
    public ResponseEntity<ApiResponse> sentOtpHandler(
            @RequestBody LoginOtpRequest req) throws Exception {

        authService.sentLoginOtp(req.getEmail(), req.getRole());

        ApiResponse res = new ApiResponse();

        res.setMessage("Otp sent successfully");

        return ResponseEntity.ok(res);
    }

# then go to SellerController.java and comment this code for now

public class SellerController {
private final SellerService sellerService;
private final VerificationCodeRepository verificationCodeRepository;
private final AuthService authService;

// @PostMapping("/sent/login-otp")
// public ResponseEntity<ApiResponse> sentOtpHandler(
// @RequestBody VerificationCode req) {
// return null;
// }

    @PostMapping("/login")

# and then go to postman and try to sent request with this json

# in sent otp request

{
"email":"signing_danaolumad2@gmail.com",
"role":"ROLE_CUSTOMER"
}

# it will response 500 Internal Server Error

"User does not exist with provided email",

# but of you use the right register email

{
"email":"signing_danaolumad@gmail.com",
"role":"ROLE_CUSTOMER"
}

# it will response 200 OK

{
"message": "Otp sent successfully"
}

## THEN LETS CREATE ENDPOINT FOR SELLER VERIFICATION

# in VerificationCodeRepository.java add this code

package com.mackodev.repository;

import com.mackodev.modal.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long> {

    VerificationCode findByEmail(String email);
    VerificationCode findByOtp(String otp);

}

# in SellerController.java add this code

package com.mackodev.controller;

import com.mackodev.domain.AccountStatus;
import com.mackodev.modal.Seller;
import com.mackodev.modal.VerificationCode;
import com.mackodev.repository.VerificationCodeRepository;
import com.mackodev.request.LoginRequest;
import com.mackodev.response.ApiResponse;
import com.mackodev.response.AuthResponse;
import com.mackodev.service.AuthService;
import com.mackodev.service.EmailService;
import com.mackodev.service.SellerService;
import com.mackodev.utils.OtpUtil;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.\*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sellers")
public class SellerController {
private final SellerService sellerService;
private final VerificationCodeRepository verificationCodeRepository;
private final AuthService authService;
private final EmailService emailService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginSeller(
            @RequestBody LoginRequest req

            ) throws Exception {

        String otp = req.getOtp();
        String email = req.getEmail();

        req.setEmail("seller_" + email);
        AuthResponse authResponse = authService.signing(req);

        return ResponseEntity.ok(authResponse);
    }

    @PatchMapping("/verify/{otp}")
    public ResponseEntity<Seller> verifySellerEmail(@PathVariable String otp) throws Exception {

        VerificationCode verificationCode = verificationCodeRepository.findByOtp(otp);

        if (verificationCode == null || !verificationCode.getOtp().equals(otp)) {
            throw new Exception("Wrong otp...");
        }

        Seller seller = sellerService.verifyEmail(verificationCode.getEmail(), otp);

        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Seller> createSeller(@RequestBody Seller seller) throws Exception, MessagingException {
        Seller savedSeller = sellerService.createSeller(seller);

        String otp = OtpUtil.generateOtp();

        VerificationCode verificationCode = new VerificationCode();
        verificationCode.setOtp(otp);
        verificationCode.setEmail(seller.getEmail());
        verificationCodeRepository.save(verificationCode);

        String subject = "Juan Graphico Email Verification Code";
        String text = "Welcome to Juan Graphico, verify your account using this link";
        String frontend_url = "http://localhost:3000/verify-seller";
        emailService.sendVerificationOtpEmail(seller.getEmail(), verificationCode.getOtp(), subject, text + frontend_url);
        return new ResponseEntity<>(savedSeller, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Seller> getSellerById(@PathVariable Long id) throws Exception {
        Seller seller = sellerService.getSellerById(id);
        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

    @GetMapping("/profile")
    public ResponseEntity<Seller> getSellerByJwt(@RequestHeader("Authorization") String jwt) throws Exception {
        Seller seller = sellerService.getSellerProfile(jwt);
        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Seller>> getAllSellers(@RequestParam(required = false)AccountStatus status) {
        List<Seller> sellers = sellerService.getAllSellers(status);
        return ResponseEntity.ok(sellers);
    }

    @PatchMapping()
    public ResponseEntity<Seller> updateSeller(@RequestHeader("Authorization") String jwt, @RequestBody Seller seller) throws Exception {
        Seller profile = sellerService.getSellerProfile(jwt);
        Seller updatedSeller = sellerService.updateSeller(profile.getId(), seller);
        return ResponseEntity.ok(updatedSeller);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSeller(@PathVariable Long id) throws Exception {
        sellerService.deleteSeller(id);
        return ResponseEntity.noContent().build();
    }

}

# lets test all our newly created api

# in postman try a new post request named create seller

Body
raw
{
"sellerName": "Upaat",
"mobile": "9876543210",
"email": "miiiupaat@gmail.com",
"password": "securepassword123",
"businessDetails": {
"businessName": "John's Enterprises",
"businessEmail": "business@example.com",
"businessMobile": "9876501234",
"businessAddress": "123 Business Street, Business City, BC 12345",
"logo": "https://example.com/logo.png",
"banner": "https://example.com/banner.png"
},
"bankDetails": {
"accountNumber": "123456789012",
"accountHolderName": "John Doe",
"ifscCode": "BANK0123456"
},
"pickupAddress": {
"name": "Marcko Enterprises",
"street": "123 Warehouse Street",
"city": "Warehouse City",
"state": "WS",
"pinCode": "67890"
},
"GSTIN": "22ABCDE1234F1Z5"
}

# it will response 201 Created

{
"id": 1,
"sellerName": "Upaat",
"mobile": "9876543210",
"email": "miiiupaat@gmail.com",
"password": "$2a$10$Qan56Cd4v0e9QZ6SmDX3V.Ikq0r9xwpoYVZQWgjtIlA.EMLdS223a",
"businessDetails": {
"businessName": "John's Enterprises",
"businessEmail": "business@example.com",
"businessMobile": "9876501234",
"businessAddress": "123 Business Street, Business City, BC 12345",
"logo": "https://example.com/logo.png",
"banner": "https://example.com/banner.png"
},
"bankDetails": {
"accountNumber": "123456789012",
"accountHolderName": "John Doe",
"ifscCode": "BANK0123456"
},
"pickupAddress": {
"id": 1,
"name": "Marcko Enterprises",
"locality": null,
"address": null,
"city": "Warehouse City",
"state": "WS",
"pinCode": "67890",
"mobile": null
},
"role": "ROLE_SELLER",
"accountStatus": "PENDING_VERIFICATION",
"emailVerified": false,
"gstin": null
}

# then next lets login with the seller

# first goto send otp request

{
"email":"signing_miiiupaat@gmail.com",
"role":"ROLE_SELLER"
}

# then create post request for seller login with the provided otp sent on email

{
"email":"miiiupaat@gmail.com",
"otp":"771871"
}

# but it will response 403 Forbidden

"message": "Access Denied",

# create a new get request get seller by id in postman

http://localhost:5454/sellers/1

it will response 200 OK
{
"id": 1,
"sellerName": "Upaat",
"mobile": "9876543210",
"email": "miiiupaat@gmail.com",
"password": "$2a$10$Qan56Cd4v0e9QZ6SmDX3V.Ikq0r9xwpoYVZQWgjtIlA.EMLdS223a",
"businessDetails": {
"businessName": "John's Enterprises",
"businessEmail": "business@example.com",
"businessMobile": "9876501234",
"businessAddress": "123 Business Street, Business City, BC 12345",
"logo": "https://example.com/logo.png",
"banner": "https://example.com/banner.png"
},
"bankDetails": {
"accountNumber": "123456789012",
"accountHolderName": "John Doe",
"ifscCode": "BANK0123456"
},
"pickupAddress": {
"id": 1,
"name": "Marcko Enterprises",
"locality": null,
"address": null,
"city": "Warehouse City",
"state": "WS",
"pinCode": "67890",
"mobile": null
},
"role": "ROLE_SELLER",
"accountStatus": "PENDING_VERIFICATION",
"gstin": null,
"emailVerified": false
}

# ALSO TEST THE get all sellers in postman get request

http://localhost:5454/sellers?status=PENDING_VERIFICATION

add keys status=PENDING_VERIFICATION

it will response 200 OK
[
{
"id": 1,
"sellerName": "Upaat",
"mobile": "9876543210",
"email": "miiiupaat@gmail.com",
"password": "$2a$10$Qan56Cd4v0e9QZ6SmDX3V.Ikq0r9xwpoYVZQWgjtIlA.EMLdS223a",
"businessDetails": {
"businessName": "John's Enterprises",
"businessEmail": "business@example.com",
"businessMobile": "9876501234",
"businessAddress": "123 Business Street, Business City, BC 12345",
"logo": "https://example.com/logo.png",
"banner": "https://example.com/banner.png"
},
"bankDetails": {
"accountNumber": "123456789012",
"accountHolderName": "John Doe",
"ifscCode": "BANK0123456"
},
"pickupAddress": {
"id": 1,
"name": "Marcko Enterprises",
"locality": null,
"address": null,
"city": "Warehouse City",
"state": "WS",
"pinCode": "67890",
"mobile": null
},
"role": "ROLE_SELLER",
"accountStatus": "PENDING_VERIFICATION",
"gstin": null,
"emailVerified": false
}
]

# all of it works fine

# now lets try to login as sellers

# but still we are denied

# lets try the verify email patch request in postman

http://localhost:5454/sellers/verify/771871

# it will response 200 OK, with emailVerified: true

{
"id": 1,
"sellerName": "Upaat",
"mobile": "9876543210",
"email": "miiiupaat@gmail.com",
"password": "$2a$10$Qan56Cd4v0e9QZ6SmDX3V.Ikq0r9xwpoYVZQWgjtIlA.EMLdS223a",
"businessDetails": {
"businessName": "John's Enterprises",
"businessEmail": "business@example.com",
"businessMobile": "9876501234",
"businessAddress": "123 Business Street, Business City, BC 12345",
"logo": "https://example.com/logo.png",
"banner": "https://example.com/banner.png"
},
"bankDetails": {
"accountNumber": "123456789012",
"accountHolderName": "John Doe",
"ifscCode": "BANK0123456"
},
"pickupAddress": {
"id": 1,
"name": "Marcko Enterprises",
"locality": null,
"address": null,
"city": "Warehouse City",
"state": "WS",
"pinCode": "67890",
"mobile": null
},
"role": "ROLE_SELLER",
"accountStatus": "PENDING_VERIFICATION",
"gstin": null,
"emailVerified": true
}

# but still we are denied login as seller

# to fix this goto AuthServiceImpl.java and edit the code

    private Authentication authenticate(String username, String otp) throws Exception {
        UserDetails userDetails = customUserService.loadUserByUsername(username);

        String SELLER_PREFIX = "seller_";
        if (username.startsWith(SELLER_PREFIX)) {
            username = username.substring(SELLER_PREFIX.length());
        }

        if (userDetails == null) {
            throw new BadCredentialsException("Invalid credentials provided.");
        }

        VerificationCode verificationCode = verificationCodeRepository.findByEmail(username);

        if (verificationCode == null || !verificationCode.getOtp().equals(otp)) {
            throw new Exception("The OTP you entered is invalid. Please try again.");
        }

# if you see another error line on file just hover "throw new Exception"

# and then in CustomUserServiceImpl.java add this code edit this part

public class CustomUserServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;
    private final SellerRepository sellerRepository;
    private static final String SELLER_PREFIX = "seller_";

# and then try in postman login as seller

{
"email":"miiiupaat@gmail.com",
"otp":"768243"
}

it will response 200 OK
{
"jwt": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzcyODA4MTcsImV4cCI6MTczNzM2NzIxNywiZW1haWwiOiJtaWlpdXBhYXRAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOiJST0xFX1NFTExFUiJ9.BgxQZTOka\_-Ppczik_eqWxhyEYeu8Dh-l72hdmItvrk",
"message": "Login Successfully",
"role": "ROLE_SELLER"
}

# get the token for profile checking

# then create a new get request for get seller profile

http://localhost:5454/sellers/profile
Authorization:
Bearer Token
eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzcyODA4MTcsImV4cCI6MTczNzM2NzIxNywiZW1haWwiOiJtaWlpdXBhYXRAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOiJST0xFX1NFTExFUiJ9.BgxQZTOka\_-Ppczik_eqWxhyEYeu8Dh-l72hdmItvrk

# it will response 200 OK

{
"id": 1,
"sellerName": "Upaat",
"mobile": "9876543210",
"email": "miiiupaat@gmail.com",
"password": "$2a$10$Qan56Cd4v0e9QZ6SmDX3V.Ikq0r9xwpoYVZQWgjtIlA.EMLdS223a",
"businessDetails": {
"businessName": "John's Enterprises",
"businessEmail": "business@example.com",
"businessMobile": "9876501234",
"businessAddress": "123 Business Street, Business City, BC 12345",
"logo": "https://example.com/logo.png",
"banner": "https://example.com/banner.png"
},
"bankDetails": {
"accountNumber": "123456789012",
"accountHolderName": "John Doe",
"ifscCode": "BANK0123456"
},
"pickupAddress": {
"id": 1,
"name": "Marcko Enterprises",
"locality": null,
"address": null,
"city": "Warehouse City",
"state": "WS",
"pinCode": "67890",
"mobile": null
},
"role": "ROLE_SELLER",
"accountStatus": "PENDING_VERIFICATION",
"gstin": null,
"emailVerified": true
}

# THEN TRY THE UPDATE SELLER PROFILE SET PATCH REQUEST IN POSTMAN

Authorization:
Bearer Token
eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzcyODA4MTcsImV4cCI6MTczNzM2NzIxNywiZW1haWwiOiJtaWlpdXBhYXRAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOiJST0xFX1NFTExFUiJ9.BgxQZTOka\_-Ppczik_eqWxhyEYeu8Dh-l72hdmItvrk

Saved

Body => raw
{
"mobile": "09876543210",
"bankDetails": {
"accountNumber": "9999999",
"accountHolderName": "Upaat",
"ifscCode": "PINAS0123456"
}
}

# then as you can see the seller profile is updated

# CREATE A GLOBAL ERROR EXCEPTION

# create new package exceptions inside of this a class called SellerException.java

package com.mackodev.exceptions;

public class SellerException extends Exception{
public SellerException(String message) {
super(message);
}
}

# also same package create a class called ErrorDetails.java

package com.mackodev.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorDetails {
private String error;
private String details;
private LocalDateTime timestamp;
}

# then create a new class called GlobalException.java inside of this package

package com.mackodev.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalException {

    @ExceptionHandler(SellerException.class)
    public ResponseEntity<ErrorDetails> sellerExceptionHandler(SellerException se, WebRequest req) {
        ErrorDetails errorDetails = new ErrorDetails();
        errorDetails.setError(se.getMessage());
        errorDetails.setDetails(req.getDescription(false));
        errorDetails.setTimestamp(LocalDateTime.now());
        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }

}

# then back to SellerServiceImpl.java and edit the line of code

    @Override
    public Seller getSellerById(Long id) throws SellerException {

        return sellerRepository.findById(id).orElseThrow(()->new SellerException("Seller not found with ID:" + id));
    }

# then in SellerService.java edit this code

public interface SellerService {

    Seller getSellerProfile(String jwt) throws Exception;
    Seller createSeller(Seller seller) throws Exception;
    Seller getSellerById(Long id) throws SellerException;

# then in SellerController.java edit this code

    @GetMapping("/{id}")
    public ResponseEntity<Seller> getSellerById(@PathVariable Long id) throws SellerException {
        Seller seller = sellerService.getSellerById(id);
        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

# and goto to postman and try to get seller by id

http://localhost:5454/sellers/3

# it will response 400 Bad Request

{
"error": "Seller not found with ID:3",
"details": "uri=/sellers/3",
"timestamp": "2025-01-19T20:22:44.4152887"
}

# thats how you create your own global exception

# NEXT LETS CREATE ANOTHER GLOBAL EXCEPTION PRODUCT EXCEPTION

# create a new class ProductException.java inside of this package com.mackodev.exceptions

package com.mackodev.exceptions;

public class ProductException extends Exception{

    public ProductException(String message) {
        super(message);
    }

}

# then in GlobalException.java add this code

package com.mackodev.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalException {

    @ExceptionHandler(SellerException.class)
    public ResponseEntity<ErrorDetails> sellerExceptionHandler(SellerException se, WebRequest req) {
        ErrorDetails errorDetails = new ErrorDetails();
        errorDetails.setError(se.getMessage());
        errorDetails.setDetails(req.getDescription(false));
        errorDetails.setTimestamp(LocalDateTime.now());
        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ProductException.class)
    public ResponseEntity<ErrorDetails> ProductExceptionHandler(SellerException se, WebRequest req) {
        ErrorDetails errorDetails = new ErrorDetails();
        errorDetails.setError(se.getMessage());
        errorDetails.setDetails(req.getDescription(false));
        errorDetails.setTimestamp(LocalDateTime.now());
        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }

}

# then create the product api

# create a new class in service called ProductService.java

package com.mackodev.service;

import com.mackodev.modal.Product;
import com.mackodev.modal.Seller;
import com.mackodev.request.CreateProductRequest;

public interface ProductService {

    public Product createProduct(CreateProductRequest req, Seller seller);

}

# then create the class CreateProductRequest.java inside of this package com.mackodev.request

package com.mackodev.request;

import lombok.Data;

import java.util.List;

@Data
public class CreateProductRequest {
private String title;
private String description;
private int mrpPrice;
private int sellingPrice;
private String color;
private List<String> images;
private String category;
private String category2;
private String category3;

    private String sizes;

}

# then continue ProductService.java

package com.mackodev.service;

import com.mackodev.modal.Product;
import com.mackodev.modal.Seller;
import com.mackodev.request.CreateProductRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {

    public Product createProduct(CreateProductRequest req, Seller seller);
    public void deleteProduct(Long productId);
    public Product updateProduct(Long productId, Product product);
    Product findProductById(Long productId);
    List<Product> searchProduct();
    public Page<Product> getAllProducts(
            String category,
            String brand,
            String colors,
            String sizes,
            Integer minPrice,
            Integer maxPrice,
            Integer minDiscount,
            String sort,
            String stock,
            Integer pageNumber
    );
    List<Product> getProductBySellerId(Long sellerId);

}

## IF ERROR 7:39

# then create the implementation class ProductServiceImpl.java inside of this package com.mackodev.service.impl

package com.mackodev.service.impl;

import com.mackodev.modal.Product;
import com.mackodev.modal.Seller;
import com.mackodev.request.CreateProductRequest;
import com.mackodev.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    @Override
    public Product createProduct(CreateProductRequest req, Seller seller) {
        return null;
    }

    @Override
    public void deleteProduct(Long productId) {

    }

    @Override
    public Product updateProduct(Long productId, Product product) {
        return null;
    }

    @Override
    public Product findProductById(Long productId) {
        return null;
    }

    @Override
    public List<Product> searchProduct() {
        return List.of();
    }

    @Override
    public Page<Product> getAllProducts(String category, String brand, String colors, String sizes, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber) {
        return null;
    }

    @Override
    public List<Product> getProductBySellerId(Long sellerId) {
        return List.of();
    }

}

# then create the interface ProductRepository.java inside of this package com.mackodev.repository

package com.mackodev.repository;

import com.mackodev.modal.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}

# then goback to ProductServiceImpl.java and edit this code

public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public Product createProduct(CreateProductRequest req, Seller seller) {

# then create the interface CategoryRepository.java inside of this package com.mackodev.repository

package com.mackodev.repository;

import com.mackodev.modal.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Category findByCategoryId(String categoryId);

}

# in ProductRepository.java add this code

package com.mackodev.repository;

import com.mackodev.modal.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {

    List<Product> findBySellerId(Long id);

    @Query("SELECT p FROM Product p where (:query is null or lower(p.title)" +
            "LIKE lower(concat('%', :query, '%') ) ) " +
            "or (:query is null or lower(p.category.name)" +
            "LIKE lower(concat('%', :query, '%') ) )")
    List<Product> searchProduct(@Param("query") String query);

}

# then in ProductService.java add this code

    Product findProductById(Long productId) throws ProductException;
    List<Product> searchProduct(String query);
    public Page<Product> getAllProducts(

# then goback to ProductServiceImpl.java and add the implementation methods

package com.mackodev.service.impl;

import com.mackodev.exceptions.ProductException;
import com.mackodev.modal.Category;
import com.mackodev.modal.Product;
import com.mackodev.modal.Seller;
import com.mackodev.repository.CategoryRepository;
import com.mackodev.repository.ProductRepository;
import com.mackodev.request.CreateProductRequest;
import com.mackodev.service.ProductService;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    @Override
    public Product createProduct(CreateProductRequest req, Seller seller) {

        Category category1 = categoryRepository.findByCategoryId(req.getCategory());

        if (category1 == null) {
            Category category = new Category();
            category.setCategoryId(req.getCategory());
            category.setLevel(1);
            category1 = categoryRepository.save(category);
        }

        Category category2 = categoryRepository.findByCategoryId(req.getCategory2());

        if (category2 == null) {
            Category category = new Category();
            category.setCategoryId(req.getCategory2());
            category.setLevel(2);
            category.setParentCategory(category1);
            category2 = categoryRepository.save(category);

        }

        Category category3 = categoryRepository.findByCategoryId(req.getCategory3());
        if (category3 == null) {
            Category category = new Category();
            category.setCategoryId(req.getCategory3());
            category.setLevel(3);
            category.setParentCategory(category2);
            category3 = categoryRepository.save(category);
        }

        int discountPercentage = calculateDiscountPercentage(req.getMrpPrice(), req.getSellingPrice());

        Product product = new Product();
        product.setSeller(seller);
        product.setCategory(category3);
        product.setDescription(req.getDescription());
        product.setCreatedAt(LocalDateTime.now());
        product.setTitle(req.getTitle());
        product.setColor(req.getColor());
        product.setSellingPrice(req.getSellingPrice());
        product.setImages(req.getImages());
        product.setMrpPrice(req.getMrpPrice());
        product.setSizes(req.getSizes());
        product.setDiscountPercent(discountPercentage);

        return productRepository.save(product);
    }

    private int calculateDiscountPercentage(int mrpPrice, int sellingPrice) {
        if (mrpPrice <= 0) {
            throw new IllegalArgumentException("The provided price must be greater than zero. Please verify and try again.");
        }
        double discount = mrpPrice - sellingPrice;
        double discountPercentage = (discount / mrpPrice) * 100;
        return (int) discountPercentage;
    }

    @Override
    public void deleteProduct(Long productId) throws ProductException {
        Product product = findProductById(productId);
        productRepository.delete(product);
    }

    @Override
    public Product updateProduct(Long productId, Product product) throws ProductException {
        findProductById(productId);
        product.setId(productId);

        return productRepository.save(product);
    }

    @Override
    public Product findProductById(Long productId) throws ProductException {
        return productRepository.findById(productId).orElseThrow(()-> new ProductException("No product found with the provided ID: **" + productId + "**. Please check the ID and try again."));
    }

    @Override
    public List<Product> searchProduct(String query) {
        return productRepository.searchProduct(query);
    }

    @Override
    public Page<Product> getAllProducts(String category, String brand, String colors, String sizes, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber) {
        Specification<Product> spec = (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (category != null) {
                Join<Product, Category> categoryJoin = root.join("category");
                predicates.add(criteriaBuilder.equal(categoryJoin.get("categoryId"), category));
            }

            if (colors != null && !colors.isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("color"), colors));
            }

            // Filter by size (single value)
            if (sizes != null && !sizes.isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("size"), sizes));
            }

            if (minPrice != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("sellingPrice"), minPrice));
            }

            if (maxPrice != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("sellingPrice"), maxPrice));
            }

            if (minDiscount != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("discountPercent"), minDiscount));
            }

            if (stock != null && !stock.isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("stock"), stock));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
        Pageable pageable;
        if (sort != null && !sort.isEmpty()) {
            pageable = switch (sort) {
                case "price_low" -> PageRequest.of(pageNumber != null ? pageNumber : 0, 10,
                        Sort.by("sellingPrice").ascending());
                case "price_high" -> PageRequest.of(pageNumber != null ? pageNumber : 0, 10,
                        Sort.by("sellingPrice").descending());
                default -> PageRequest.of(pageNumber != null ? pageNumber : 0, 10,
                        Sort.unsorted());
            };
        }
        else {
            pageable = PageRequest.of(pageNumber != null ? pageNumber : 0, 10, Sort.unsorted());
        }

        return productRepository.findAll(spec, pageable);
    }

    @Override
    public List<Product> getProductBySellerId(Long sellerId) {
        return productRepository.findBySellerId(sellerId);
    }

}

# THEN WE NEED TO CREATE CONTROLLER FOR EACH ONE

# create a new class in controller named ProductController.java

package com.mackodev.controller;

import com.mackodev.exceptions.ProductException;
import com.mackodev.modal.Product;
import com.mackodev.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.\*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable Long productId) throws ProductException {

        Product product = productService.findProductById(productId);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProduct(@RequestParam(required = false) String query) {
        List<Product> products = productService.searchProduct(query);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Page<Product>> getAllProducts(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String brand,
            @RequestParam(required = false) String color,
            @RequestParam(required = false) String size,
            @RequestParam(required = false) Integer minPrice,
            @RequestParam(required = false) Integer maxPrice,
            @RequestParam(required = false) Integer minDiscount,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String stock,
            @RequestParam(defaultValue = "0") Integer pageNumber) {

        return new ResponseEntity<>(
                productService.getAllProducts(category, brand, color, size, minPrice, maxPrice, minDiscount, sort, stock, pageNumber), HttpStatus.OK
        );
    }

}

# then create SellerProductController to test every end point

package com.mackodev.controller;

import com.mackodev.exceptions.ProductException;
import com.mackodev.modal.Product;
import com.mackodev.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.\*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable Long productId) throws ProductException {

        Product product = productService.findProductById(productId);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProduct(@RequestParam(required = false) String query) {
        List<Product> products = productService.searchProduct(query);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Page<Product>> getAllProducts(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String brand,
            @RequestParam(required = false) String color,
            @RequestParam(required = false) String size,
            @RequestParam(required = false) Integer minPrice,
            @RequestParam(required = false) Integer maxPrice,
            @RequestParam(required = false) Integer minDiscount,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String stock,
            @RequestParam(defaultValue = "0") Integer pageNumber) {

        return new ResponseEntity<>(
                productService.getAllProducts(category, brand, color, size, minPrice, maxPrice, minDiscount, sort, stock, pageNumber), HttpStatus.OK
        );
    }

}

# THEN LETS TEST EVERY ENDPOINT OF PRODUCTS

# first the create product post request in postman

http://localhost:5454/api/sellers/products

Athorization
Bearer Token copy from seller profile

Body
raw
{
"title": "Stylish Jacket",
"description": "A trendy and comfortable winter jacket.",
"mrpPrice": 5000,
"sellingPrice": 3500,
"quantity": 150,
"color": "Black",
"images": [
"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/h/a/s-don-t-mess-with-me-the-modern-soul-original-imagnjyawbhfgcw2.jpeg?q=70",
"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/l/y/s-don-t-mess-with-me-the-modern-soul-original-imagnjyaqbkfd7p6.jpeg?q=70"
],
"numRatings": 120,
"category": {
"name": "men_shirt"
},
"sizes": "S, M, L, XL"
}

# it will response 200OK

# GET ALL PRODUCTS

http://localhost:5454/products

# GET SELLER PRODUCTS

http://localhost:5454/api/sellers/products

Authorization
Bearer Token -> eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzcyODA4MTcsImV4cCI6MTczNzM2NzIxNywiZW1haWwiOiJtaWlpdXBhYXRAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOiJST0xFX1NFTExFUiJ9.BgxQZTOka\_-Ppczik_eqWxhyEYeu8Dh-l72hdmItvrk

# it will get all the product in seller database

# then test also the search functionality same in get all product get request

# in params tab

color => white

# it should search what you wanted


# NOW LETS CREATE ENDPOINT FOR CART
# crate a new class named CartItemRepository.java in repository package
package com.mackodev.repository;

import com.mackodev.modal.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}


# then create interface CartService.java in service package
package com.mackodev.service;

import com.mackodev.modal.Cart;
import com.mackodev.modal.CartItem;
import com.mackodev.modal.Product;
import com.mackodev.modal.User;

public interface CartService {

    public CartItem addCartItem(
            User user,
            Product product,
            String size,
            int quantity
    );

    public Cart findUserCart(User user);
}


# then add the implementation in impl package named CartServiceImpl.java
package com.mackodev.service.impl;

import com.mackodev.modal.Cart;
import com.mackodev.modal.CartItem;
import com.mackodev.modal.Product;
import com.mackodev.modal.User;
import com.mackodev.repository.CartItemRepository;
import com.mackodev.repository.CartRepository;
import com.mackodev.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;

    @Override
    public CartItem addCartItem(User user, Product product, String size, int quantity) {
        return null;
    }

    @Override
    public Cart findUserCart(User user) {
        return null;
    }
}


# then goto CartRepository.java add method
package com.mackodev.repository;

import com.mackodev.modal.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {

    Cart findByUserId(Long id);
}


# then back to CartItemRepository.java add this code
package com.mackodev.repository;

import com.mackodev.modal.Cart;
import com.mackodev.modal.CartItem;
import com.mackodev.modal.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    CartItem findByCartAndProductAndSize(Cart cart, Product product, String size);
}



# then back to CartServiceImpl.java add this code
package com.mackodev.service.impl;

import com.mackodev.modal.Cart;
import com.mackodev.modal.CartItem;
import com.mackodev.modal.Product;
import com.mackodev.modal.User;
import com.mackodev.repository.CartItemRepository;
import com.mackodev.repository.CartRepository;
import com.mackodev.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;

    @Override
    public CartItem addCartItem(User user, Product product, String size, int quantity) {
        Cart cart = findUserCart(user);

        CartItem isPresent = cartItemRepository.findByCartAndProductAndSize(cart, product, size);

        if (isPresent == null) {
            CartItem cartItem = new CartItem();
            cartItem.setProduct(product);
            cartItem.setQuantity(quantity);
            cartItem.setUserId(user.getId());
            cartItem.setSize(size);

            int totalPrice = quantity * product.getSellingPrice();
            cartItem.setSellingPrice(totalPrice);

            cart.getCartItems().add(cartItem);
            cartItem.setCart(cart);

            return cartItemRepository.save(cartItem);
        }

        return null;
    }

    @Override
    public Cart findUserCart(User user) {
        Cart cart = cartRepository.findByUserId(user.getId());

        int totalPrice = 0;
        int totalDiscountedPrice = 0;
        int totalItem = 0;

        for (CartItem cartItem: cart.getCartItems()) {
            totalPrice += cartItem.getMrpPrice();
            totalDiscountedPrice += cartItem.getSellingPrice();
            totalItem += cartItem.getQuantity();
        }

        cart.setTotalMrpPrice(totalPrice);
        cart.setTotalItem(totalItem);
        cart.setTotalSellingPrice(totalDiscountedPrice);
        cart.setDiscount(calculateDiscountPercentage(totalPrice, totalDiscountedPrice));
        cart.setTotalItem(totalItem);

        return null;
    }

    private int calculateDiscountPercentage(int mrpPrice, int sellingPrice) {
        if (mrpPrice <= 0) {
            throw new IllegalArgumentException("The provided price must be greater than zero. Please verify and try again.");
        }
        double discount = mrpPrice - sellingPrice;
        double discountPercentage = (discount / mrpPrice) * 100;
        return (int) discountPercentage;
    }
}



# then add also the implementation for updating the cart and removing the cart
# in service package create an interface named CartItemService.java
package com.mackodev.service;

import com.mackodev.modal.CartItem;

public interface CartItemService {

    CartItem updateCartItem(Long userId, Long id, CartItem cartItem);
    void removeCartItem(Long userId, Long cartItemId);
    CartItem findCartItemById(Long id);
}


# then add the implementation in package impl, class named CartItemServiceImpl.java
package com.mackodev.service.impl;

import com.mackodev.modal.CartItem;
import com.mackodev.modal.User;
import com.mackodev.repository.CartItemRepository;
import com.mackodev.service.CartItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartItemServiceImpl implements CartItemService {

    private final CartItemRepository cartItemRepository;

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws Exception {
        CartItem item = findCartItemById(id);

        User cartItemUser = item.getCart().getUser();

        if (cartItemUser.getId().equals(userId)) {
            item.setQuantity(cartItem.getQuantity());
            item.setMrpPrice(item.getQuantity() * item.getProduct().getMrpPrice());
            item.setSellingPrice(item.getQuantity() * item.getProduct().getSellingPrice());
            return cartItemRepository.save(item);
        }
        throw new Exception("You are not authorized to update this cart item.");
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) throws Exception {
        CartItem item = findCartItemById(cartItemId);

        User cartItemUser = item.getCart().getUser();

        if (cartItemUser.getId().equals(userId)) {
            cartItemRepository.delete(item);
        }
        else throw new Exception("You are not authorized to remove this cart item.");

    }

    @Override
    public CartItem findCartItemById(Long id) throws Exception {
        return cartItemRepository.findById(id).orElseThrow(()-> new Exception("Cart item not found with ID: " + id));
    }
}


# then lets create the controller for both CartItemServiceImpl and CartItemService

# in the next steps below hover the AddItemRequest to create this class it should be inside the request package
package com.mackodev.request;

import lombok.Data;

@Data
public class AddItemRequest {
    private String size;
    private int quantity;
    private Long productId;
}


# in controller package create a new class named CartController.java
package com.mackodev.controller;

import com.mackodev.exceptions.ProductException;
import com.mackodev.modal.Cart;
import com.mackodev.modal.CartItem;
import com.mackodev.modal.Product;
import com.mackodev.modal.User;
import com.mackodev.request.AddItemRequest;
import com.mackodev.response.ApiResponse;
import com.mackodev.service.CartItemService;
import com.mackodev.service.CartService;
import com.mackodev.service.ProductService;
import com.mackodev.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService;
    private final CartItemService cartItemService;
    private final UserService userService;
    private final ProductService productService;

    @GetMapping
    public ResponseEntity<Cart> findUserCartHandler(@RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        Cart cart = cartService.findUserCart(user);

        return new ResponseEntity<Cart>(cart, HttpStatus.OK);
    }

    @PutMapping("/add")
    public ResponseEntity<CartItem> addItemToCart(@RequestBody AddItemRequest req, @RequestHeader("Authorization") String jwt) throws ProductException, Exception {

        User user = userService.findUserByJwtToken(jwt);
        Product product = productService.findProductById(req.getProductId());

        CartItem item = cartService.addCartItem(user, product, req.getSize(), req.getQuantity());

        ApiResponse res = new ApiResponse();
        res.setMessage("Item added to cart successfully");

        return new ResponseEntity<>(item, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/item/{cartItemId}")
    public ResponseEntity<ApiResponse>deleteCartItemHandler(@PathVariable Long cartItemId, @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        cartItemService.removeCartItem(user.getId(), cartItemId);

        ApiResponse res = new ApiResponse();
        res.setMessage("Item successfully removed from cart.");

        return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
    }


    @PutMapping("/item/{cartItemId}")
    public ResponseEntity<CartItem>updateCartItemHandler(@PathVariable Long cartItemId, @RequestBody CartItem cartItem, @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        CartItem updatedCartItem = null;
        if (cartItem.getQuantity() > 0) {
            updatedCartItem = cartItemService.updateCartItem(user.getId(), cartItemId, cartItem);
        }

        return new ResponseEntity<>(updatedCartItem, HttpStatus.ACCEPTED);
    }

}


## THEN TEST THE API ENDPOINTS IN POSTMAN
# first sign in as customer in our case signing is the name of our get request
# get the jwt token 
# then create a new get request named get user cart
http://localhost:5454/api/cart

Authorization
Bearer Token => paste the copied jwt token

but it will give error 500 Internal Server Error
"message": "The provided price must be greater than zero. Please verify and try again.",

# to solve this in CartServiceImpl.java, locate calculateDiscountPercentage method

     cart.setTotalItem(totalItem);

        return cart;
    }

    private int calculateDiscountPercentage(int mrpPrice, int sellingPrice) {
        if (mrpPrice <= 0) {
//            throw new IllegalArgumentException("The provided price must be greater than zero. Please verify and try again.");
            return 0;
        }
        double discount = mrpPrice - sellingPrice;
        double discountPercentage = (discount / mrpPrice) * 100;
        return (int) discountPercentage;
    }
}

# and then send a request again it will now return 200 ok, but no item in cart for now we need to add it

# lets try adding item to cart
# create a new PUT request in postman, named add item to cart
http://localhost:5454/api/cart/add

Authorization
Bearer Token => copied token

Body => raw => {
    "size":"S",
    "quantity":"1",
    "productId":1
}

# it will response 500 Internal Server Error
"message": "No message available",

# to solve this in modal/Cart.java remove the @EqualsAndHashCode

# then send request again to postman at it will response 200 OK!

# but when we go back to get user cart postman request it will again return an error
500 Internal Server Error
getMrpPrice()\" is null"

# to solve this in CartServiceImpl.java in method addCartItem add this code

            int totalPrice = quantity * product.getSellingPrice();
            cartItem.setSellingPrice(totalPrice);
            cartItem.setMrpPrice(quantity*product.getMrpPrice());

            cart.getCartItems().add(cartItem);
            cartItem.setCart(cart);

            return cartItemRepository.save(cartItem);
        }

        return isPresent;
    }

# NOW FINALLY THE POSTMAN ENDPOINTS ARE WORKING PROPERLY

# 1 => get user cart
GET => http://localhost:5454/api/cart
Authorization => Bearer Token => copied token from customer
response 200 OK
{
    "id": 10,
    "user": {
        "id": 52,
        "email": "danaolumad@gmail.com",
        "fullName": "danao",
        "mobile": "093465489764",
        "role": "ROLE_CUSTOMER",
        "addresses": []
    },
    "cartItems": [
        {
            "id": 103,
            "product": {
                "id": 1,
                "title": "Stylish Jacket",
                "description": "A trendy and comfortable winter jacket.",
                "mrpPrice": 5000,
                "sellingPrice": 3500,
                "discountPercent": 30,
                "quantity": 0,
                "color": "Black",
                "images": [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/h/a/s-don-t-mess-with-me-the-modern-soul-original-imagnjyawbhfgcw2.jpeg?q=70",
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/l/y/s-don-t-mess-with-me-the-modern-soul-original-imagnjyaqbkfd7p6.jpeg?q=70"
                ],
                "numRatings": 0,
                "category": {
                    "id": 3,
                    "name": null,
                    "categoryId": "men_shirt",
                    "parentCategory": {
                        "id": 2,
                        "name": null,
                        "categoryId": "bottom_wear",
                        "parentCategory": {
                            "id": 1,
                            "name": null,
                            "categoryId": "men",
                            "parentCategory": null,
                            "level": 1
                        },
                        "level": 2
                    },
                    "level": 3
                },
                "seller": {
                    "id": 1,
                    "sellerName": "Upaat",
                    "mobile": "09876543210",
                    "email": "miiiupaat@gmail.com",
                    "password": "$2a$10$Qan56Cd4v0e9QZ6SmDX3V.Ikq0r9xwpoYVZQWgjtIlA.EMLdS223a",
                    "businessDetails": {
                        "businessName": "John's Enterprises",
                        "businessEmail": "business@example.com",
                        "businessMobile": "9876501234",
                        "businessAddress": "123 Business Street, Business City, BC 12345",
                        "logo": "https://example.com/logo.png",
                        "banner": "https://example.com/banner.png"
                    },
                    "bankDetails": {
                        "accountNumber": "9999999",
                        "accountHolderName": "Upaat",
                        "ifscCode": "PINAS0123456"
                    },
                    "pickupAddress": {
                        "id": 1,
                        "name": "Marcko Enterprises",
                        "locality": null,
                        "address": null,
                        "city": "Warehouse City",
                        "state": "WS",
                        "pinCode": "67890",
                        "mobile": null
                    },
                    "role": "ROLE_SELLER",
                    "accountStatus": "PENDING_VERIFICATION",
                    "emailVerified": true,
                    "gstin": null
                },
                "createdAt": "2025-01-20T12:35:46",
                "reviews": [],
                "sizes": "S, M, L, XL"
            },
            "size": "S",
            "quantity": 30,
            "mrpPrice": 150000,
            "sellingPrice": 105000,
            "userId": 52
        },
        {
            "id": 102,
            "product": {
                "id": 1,
                "title": "Stylish Jacket",
                "description": "A trendy and comfortable winter jacket.",
                "mrpPrice": 5000,
                "sellingPrice": 3500,
                "discountPercent": 30,
                "quantity": 0,
                "color": "Black",
                "images": [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/h/a/s-don-t-mess-with-me-the-modern-soul-original-imagnjyawbhfgcw2.jpeg?q=70",
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/l/y/s-don-t-mess-with-me-the-modern-soul-original-imagnjyaqbkfd7p6.jpeg?q=70"
                ],
                "numRatings": 0,
                "category": {
                    "id": 3,
                    "name": null,
                    "categoryId": "men_shirt",
                    "parentCategory": {
                        "id": 2,
                        "name": null,
                        "categoryId": "bottom_wear",
                        "parentCategory": {
                            "id": 1,
                            "name": null,
                            "categoryId": "men",
                            "parentCategory": null,
                            "level": 1
                        },
                        "level": 2
                    },
                    "level": 3
                },
                "seller": {
                    "id": 1,
                    "sellerName": "Upaat",
                    "mobile": "09876543210",
                    "email": "miiiupaat@gmail.com",
                    "password": "$2a$10$Qan56Cd4v0e9QZ6SmDX3V.Ikq0r9xwpoYVZQWgjtIlA.EMLdS223a",
                    "businessDetails": {
                        "businessName": "John's Enterprises",
                        "businessEmail": "business@example.com",
                        "businessMobile": "9876501234",
                        "businessAddress": "123 Business Street, Business City, BC 12345",
                        "logo": "https://example.com/logo.png",
                        "banner": "https://example.com/banner.png"
                    },
                    "bankDetails": {
                        "accountNumber": "9999999",
                        "accountHolderName": "Upaat",
                        "ifscCode": "PINAS0123456"
                    },
                    "pickupAddress": {
                        "id": 1,
                        "name": "Marcko Enterprises",
                        "locality": null,
                        "address": null,
                        "city": "Warehouse City",
                        "state": "WS",
                        "pinCode": "67890",
                        "mobile": null
                    },
                    "role": "ROLE_SELLER",
                    "accountStatus": "PENDING_VERIFICATION",
                    "emailVerified": true,
                    "gstin": null
                },
                "createdAt": "2025-01-20T12:35:46",
                "reviews": [],
                "sizes": "S, M, L, XL"
            },
            "size": "L",
            "quantity": 6,
            "mrpPrice": 30000,
            "sellingPrice": 21000,
            "userId": 52
        }
    ],
    "totalSellingPrice": 126000.0,
    "totalItem": 36,
    "totalMrpPrice": 180000,
    "discount": 30,
    "couponCode": null
}

# 2 => add item to cart
PUT => http://localhost:5454/api/cart/add
Authorization => Bearer Token => copied token from customer
{
    "size":"M",
    "quantity":9,
    "productId":1
}

response => 202 Accepted
{
    "id": 104,
    "product": {
        "id": 1,
        "title": "Stylish Jacket",
        "description": "A trendy and comfortable winter jacket.",
        "mrpPrice": 5000,
        "sellingPrice": 3500,
        "discountPercent": 30,
        "quantity": 0,
        "color": "Black",
        "images": [
            "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/h/a/s-don-t-mess-with-me-the-modern-soul-original-imagnjyawbhfgcw2.jpeg?q=70",
            "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/l/y/s-don-t-mess-with-me-the-modern-soul-original-imagnjyaqbkfd7p6.jpeg?q=70"
        ],
        "numRatings": 0,
        "category": {
            "id": 3,
            "name": null,
            "categoryId": "men_shirt",
            "parentCategory": {
                "id": 2,
                "name": null,
                "categoryId": "bottom_wear",
                "parentCategory": {
                    "id": 1,
                    "name": null,
                    "categoryId": "men",
                    "parentCategory": null,
                    "level": 1
                },
                "level": 2
            },
            "level": 3
        },
        "seller": {
            "id": 1,
            "sellerName": "Upaat",
            "mobile": "09876543210",
            "email": "miiiupaat@gmail.com",
            "password": "$2a$10$Qan56Cd4v0e9QZ6SmDX3V.Ikq0r9xwpoYVZQWgjtIlA.EMLdS223a",
            "businessDetails": {
                "businessName": "John's Enterprises",
                "businessEmail": "business@example.com",
                "businessMobile": "9876501234",
                "businessAddress": "123 Business Street, Business City, BC 12345",
                "logo": "https://example.com/logo.png",
                "banner": "https://example.com/banner.png"
            },
            "bankDetails": {
                "accountNumber": "9999999",
                "accountHolderName": "Upaat",
                "ifscCode": "PINAS0123456"
            },
            "pickupAddress": {
                "id": 1,
                "name": "Marcko Enterprises",
                "locality": null,
                "address": null,
                "city": "Warehouse City",
                "state": "WS",
                "pinCode": "67890",
                "mobile": null
            },
            "role": "ROLE_SELLER",
            "accountStatus": "PENDING_VERIFICATION",
            "emailVerified": true,
            "gstin": null
        },
        "createdAt": "2025-01-20T12:35:46",
        "reviews": [],
        "sizes": "S, M, L, XL"
    },
    "size": "M",
    "quantity": 9,
    "mrpPrice": 45000,
    "sellingPrice": 31500,
    "userId": 52
}

# 3 => remove cart item
DELETE REQUEST => http://localhost:5454/api/cart/item/103
Authorization => Bearer Token => copied token from customer
response => 202 Accepted
{
    "message": "Item successfully removed from cart."
}

# 4 => update cart item
PUT => http://localhost:5454/api/cart/item/104
Authorization => Bearer Token => copied token from customer
Body => raw => {
                    "quantity":900
                }

response 202 Accepted
{
    "id": 104,
    "product": {
        "id": 1,
        "title": "Stylish Jacket",
        "description": "A trendy and comfortable winter jacket.",
        "mrpPrice": 5000,
        "sellingPrice": 3500,
        "discountPercent": 30,
        "quantity": 0,
        "color": "Black",
        "images": [
            "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/h/a/s-don-t-mess-with-me-the-modern-soul-original-imagnjyawbhfgcw2.jpeg?q=70",
            "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/l/y/s-don-t-mess-with-me-the-modern-soul-original-imagnjyaqbkfd7p6.jpeg?q=70"
        ],
        "numRatings": 0,
        "category": {
            "id": 3,
            "name": null,
            "categoryId": "men_shirt",
            "parentCategory": {
                "id": 2,
                "name": null,
                "categoryId": "bottom_wear",
                "parentCategory": {
                    "id": 1,
                    "name": null,
                    "categoryId": "men",
                    "parentCategory": null,
                    "level": 1
                },
                "level": 2
            },
            "level": 3
        },
        "seller": {
            "id": 1,
            "sellerName": "Upaat",
            "mobile": "09876543210",
            "email": "miiiupaat@gmail.com",
            "password": "$2a$10$Qan56Cd4v0e9QZ6SmDX3V.Ikq0r9xwpoYVZQWgjtIlA.EMLdS223a",
            "businessDetails": {
                "businessName": "John's Enterprises",
                "businessEmail": "business@example.com",
                "businessMobile": "9876501234",
                "businessAddress": "123 Business Street, Business City, BC 12345",
                "logo": "https://example.com/logo.png",
                "banner": "https://example.com/banner.png"
            },
            "bankDetails": {
                "accountNumber": "9999999",
                "accountHolderName": "Upaat",
                "ifscCode": "PINAS0123456"
            },
            "pickupAddress": {
                "id": 1,
                "name": "Marcko Enterprises",
                "locality": null,
                "address": null,
                "city": "Warehouse City",
                "state": "WS",
                "pinCode": "67890",
                "mobile": null
            },
            "role": "ROLE_SELLER",
            "accountStatus": "PENDING_VERIFICATION",
            "emailVerified": true,
            "gstin": null
        },
        "createdAt": "2025-01-20T12:35:46",
        "reviews": [],
        "sizes": "S, M, L, XL"
    },
    "size": "M",
    "quantity": 900,
    "mrpPrice": 4500000,
    "sellingPrice": 3150000,
    "userId": 52
}


## NEXT WELL BE ORDER IMPLEMENTATION
# create a interface in service package named OrderService.java
package com.mackodev.service;

import com.mackodev.domain.OrderStatus;
import com.mackodev.modal.*;

import java.util.List;
import java.util.Set;

public interface OrderService {
    Set<Order> createOrder(User user, Address shippingAddress, Cart cart);
    Order findOrderById(long id) throws Exception;
    List<Order> usersOrderHistory(Long userId);
    List<Order> sellerOrder(Long sellerId);
    Order updateOrderStatus(Long orderId, OrderStatus orderStatus) throws Exception;
    Order cancelOrder(Long orderId, User user) throws Exception;
    OrderItem getOrderItemById(Long id) throws Exception;
}




# then check your OrderStatus.java is like this
package com.mackodev.domain;

public enum OrderStatus {
    PENDING,
    PLACED,
    CONFIRMED,
    SHIPPED,
    DELIVERED,
    CANCELLED
}


# and then create the implementation of eact one
# in impl package create a new class OrderServiceImpl.java
package com.mackodev.service.impl;

import com.mackodev.domain.OrderStatus;
import com.mackodev.modal.Address;
import com.mackodev.modal.Cart;
import com.mackodev.modal.Order;
import com.mackodev.modal.User;
import com.mackodev.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    @Override
    public Set<Order> createOrder(User user, Address shippingAddress, Cart cart) {
        return Set.of();
    }

    @Override
    public Order findOrderById(long id) {
        return null;
    }

    @Override
    public List<Order> usersOrderHistory(Long userId) {
        return List.of();
    }

    @Override
    public List<Order> sellerOrder(Long sellerId) {
        return List.of();
    }

    @Override
    public Order updateOrderStatus(Long orderId, OrderStatus orderStatus) {
        return null;
    }

    @Override
    public Order cancelOrder(Long orderId, User user) {
        return null;
    }

     @Override
   public OrderItem getOrderItemById(Long id) {
        return null;
    }
}


# but lets create first the repository, create new interface OrderRepository.java in repository package
package com.mackodev.repository;

import com.mackodev.modal.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByUserId(Long userId);
    List<Order> findBySellerId(Long sellerId);
}


# IF ERROR GOTO 10:09:23

# create a new interface OrderItemRepository.java in repository package
package com.mackodev.repository;

import com.mackodev.modal.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}



# then back to OrderServiceImpl.java add the implementations
package com.mackodev.service.impl;

import com.mackodev.domain.OrderStatus;
import com.mackodev.domain.PaymentStatus;
import com.mackodev.modal.*;
import com.mackodev.repository.AddressRepository;
import com.mackodev.repository.OrderItemRepository;
import com.mackodev.repository.OrderRepository;
import com.mackodev.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final AddressRepository addressRepository;
    private final OrderItemRepository orderItemRepository;

    @Override
    public Set<Order> createOrder(User user, Address shippingAddress, Cart cart) {

        if (!user.getAddresses().contains(shippingAddress)) {
            user.getAddresses().add(shippingAddress);
        }
        Address address = addressRepository.save(shippingAddress);

        Map<Long, List<CartItem>> itemBySeller = cart.getCartItems().stream()
                .collect(Collectors.groupingBy(item->item.getProduct()
                        .getSeller().getId()));

        Set<Order> orders = new HashSet<>();

        for (Map.Entry<Long, List<CartItem>> entry:itemBySeller.entrySet()) {
            Long sellerId = entry.getKey();
            List<CartItem> items = entry.getValue();

            int totalOrderPrice = items.stream().mapToInt(
                    CartItem::getSellingPrice
            ).sum();
            int totalItem = items.stream().mapToInt(CartItem::getQuantity).sum();

            Order createdOrder = new Order();
            createdOrder.setUser(user);
            createdOrder.setSellerId(sellerId);
            createdOrder.setTotalMrpPrice(totalOrderPrice);
            createdOrder.setTotalSellingPrice(totalOrderPrice);
            createdOrder.setTotalItem(totalItem);
            createdOrder.setShippingAddress(address);
            createdOrder.setOrderStatus(OrderStatus.PENDING);
            createdOrder.getPaymentDetails().setStatus(PaymentStatus.PENDING);

            Order savedOrder = orderRepository.save(createdOrder);
            orders.add(savedOrder);

            List<OrderItem> orderItems = new ArrayList<>();

            for (CartItem item:items) {
                OrderItem orderItem = new OrderItem();
                orderItem.setOrder(savedOrder);
                orderItem.setMrpPrice(item.getMrpPrice());
                orderItem.setProduct(item.getProduct());
                orderItem.setQuantity(item.getQuantity());
                orderItem.setSize(item.getSize());
                orderItem.setUserId(item.getUserId());
                orderItem.setSellingPrice(item.getSellingPrice());

                savedOrder.getOrderItems().add(orderItem);

                OrderItem saveOrderItem = orderItemRepository.save(orderItem);
                orderItems.add(saveOrderItem);
            }
        }


        return orders;
    }

    @Override
    public Order findOrderById(long id) throws Exception {
        return orderRepository.findById(id).orElseThrow(()-> new Exception("The requested order could not be found."));
    }

    @Override
    public List<Order> usersOrderHistory(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    @Override
    public List<Order> sellerOrder(Long sellerId) {
        return orderRepository.findBySellerId(sellerId);
    }

    @Override
    public Order updateOrderStatus(Long orderId, OrderStatus orderStatus) throws Exception {
        Order order = findOrderById(orderId);
        order.setOrderStatus(orderStatus);
        return orderRepository.save(order);
    }

    @Override
    public Order cancelOrder(Long orderId, User user) throws Exception {
        Order order = findOrderById(orderId);

        if (!user.getId().equals(order.getUser().getId())) {
            throw new Exception("You don't have permission to access this order.");
        }
        order.setOrderStatus(OrderStatus.CANCELLED);
        return orderRepository.save(order);
    }

     @Override
    public OrderItem getOrderItemById(Long id) throws Exception {
        return orderItemRepository.findById(id).orElseThrow(()-> new Exception("The specified order item does not exist."));
    }
}


# THEN CREATE THE CONTROLLER OF THOSE
# FIRST CREATE THIS IN RESPONSE PACKAGE named PaymentLinkResponse.java
package com.mackodev.response;

import lombok.Data;

@Data
public class PaymentLinkResponse {
    private String payment_link_url;
    private String payment_link_id;
}


# create a new class in controller package named OrderController.java
package com.mackodev.controller;

import com.mackodev.domain.PaymentMethod;
import com.mackodev.modal.*;
import com.mackodev.response.PaymentLinkResponse;
import com.mackodev.service.CartService;
import com.mackodev.service.OrderService;
import com.mackodev.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;
    private final UserService userService;
    private final CartService cartService;

    @PostMapping()
    public ResponseEntity<PaymentLinkResponse> createOrderHandler(
            @RequestBody Address shippingAddress,
            @RequestParam PaymentMethod paymentMethod,
            @RequestHeader("Authorization")String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.findUserCart(user);
        Set<Order> orders = orderService.createOrder(user, shippingAddress, cart);

        PaymentLinkResponse res = new PaymentLinkResponse();

        return new ResponseEntity<>(res, HttpStatus.OK);

    }

    @GetMapping("/user")
    public ResponseEntity<List<Order>> usersOrderHistoryHandler(
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        List<Order> orders = orderService.usersOrderHistory(user.getId());
        return new ResponseEntity<>(orders, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Order orders = orderService.findOrderById(orderId);
        return new ResponseEntity<>(orders, HttpStatus.ACCEPTED);
    }

    @GetMapping("/item/{orderItemId}")
    public ResponseEntity<OrderItem> getOrderItemById(
            @PathVariable Long orderItemId, @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        OrderItem orderItem = orderService.getOrderItemById(orderItemId);
        return new ResponseEntity<>(orderItem, HttpStatus.ACCEPTED);
    }

    @PutMapping("/{orderId}/cancel")
    public ResponseEntity<Order> cancelOrder(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Order order = orderService.cancelOrder(orderId, user);

        return ResponseEntity.ok(order);
    }
}


# then create the interface named SellerReportService in service package
package com.mackodev.service;

import com.mackodev.modal.Seller;
import com.mackodev.modal.SellerReport;

public interface SellerReportService {
    SellerReport getSellerReport(Seller seller);
    SellerReport updateSellerReport(SellerReport sellerReport);
}




# then create the interface repository named SellerReportRepository in repository package
package com.mackodev.repository;

import com.mackodev.modal.SellerReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerReportRepository extends JpaRepository<SellerReport, Long> {
    SellerReport findBySellerId(Long sellerId);
}




# then create the class implementation in impl package named SellerReportServiceImpl.java

package com.mackodev.service.impl;

import com.mackodev.modal.Seller;
import com.mackodev.modal.SellerReport;
import com.mackodev.repository.SellerReportRepository;
import com.mackodev.service.SellerReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SellerReportServiceImpl implements SellerReportService {

    private final SellerReportRepository sellerReportRepository;

    @Override
    public SellerReport getSellerReport(Seller seller) {
        SellerReport sr = sellerReportRepository.findBySellerId(seller.getId());

        if (sr == null) {
            SellerReport newReport = new SellerReport();
            newReport.setSeller(seller);
            return sellerReportRepository.save(newReport);
        }

        return sr;
    }

    @Override
    public SellerReport updateSellerReport(SellerReport sellerReport) {
        return sellerReportRepository.save(sellerReport);
    }
}


# then create the controller method for this, back to SellerController.java add the @GetMapping("/report")

public class SellerController {
    private final SellerService sellerService;
    private final VerificationCodeRepository verificationCodeRepository;
    private final AuthService authService;
    private final EmailService emailService;
    private final SellerReportService sellerReportService;

------------------------------------------------------------------

 @GetMapping("/profile")
    public ResponseEntity<Seller> getSellerByJwt(@RequestHeader("Authorization") String jwt) throws Exception {
        Seller seller = sellerService.getSellerProfile(jwt);
        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

    @GetMapping("/report")
    public ResponseEntity<SellerReport> getSellerReport(@RequestHeader("Authorization") String jwt) throws Exception {

        Seller seller = sellerService.getSellerProfile(jwt);
        SellerReport report = sellerReportService.getSellerReport(seller);
        return new ResponseEntity<>(report, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Seller>> getAllSellers(@RequestParam(required = false)AccountStatus status) {
        List<Seller> sellers = sellerService.getAllSellers(status);



# then back to OrderController.java add this code

public class OrderController {

    private final OrderService orderService;
    private final UserService userService;
    private final CartService cartService;
    private final SellerService sellerService;
    private final SellerReportService sellerReportService;


-------------------------------------------------------------

@PutMapping("/{orderId}/cancel")
    public ResponseEntity<Order> cancelOrder(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Order order = orderService.cancelOrder(orderId, user);

        Seller seller = sellerService.getSellerById(order.getSellerId());
        SellerReport report = sellerReportService.getSellerReport(seller);

        report.setCanceledOrders(report.getCanceledOrders() + 1);
        report.setTotalRefunds(report.getTotalRefunds() + order.getTotalSellingPrice());
        sellerReportService.updateSellerReport(report);

        return ResponseEntity.ok(order);
    }
}


# then next lets create the seller order controller
# create a new class named SellerOrderController on controller package
package com.mackodev.controller;

import com.mackodev.domain.OrderStatus;
import com.mackodev.modal.Order;
import com.mackodev.modal.Seller;
import com.mackodev.service.OrderService;
import com.mackodev.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/seller/orders")
public class SellerOrderController {

    private final OrderService orderService;
    private final SellerService sellerService;

    @GetMapping()
    public ResponseEntity<List<Order>> getAllOrdersHandler(@RequestHeader("Authorization") String jwt) throws Exception {

        Seller seller = sellerService.getSellerProfile(jwt);
        List<Order> orders = orderService.sellerOrder(seller.getId());

        return new ResponseEntity<>(orders, HttpStatus.ACCEPTED);
    }

    @PatchMapping("/{orderId}/status/{orderStatus}")
    public ResponseEntity<Order> updateOrderHandler(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long orderId,
            @PathVariable OrderStatus orderStatus
            ) throws Exception {

        Order order = orderService.updateOrderStatus(orderId, orderStatus);

        return new ResponseEntity<>(order, HttpStatus.ACCEPTED);
    }
}


# 10:48 RAZOR PAY
# NEXT LETS IMPLEMENT THE PAYMENT METHOD

# GOTO GOOGLE SEARCH => stripe maven dependency and choose the latest dependency
=> razorpay maven dependency choose the latest dependency

# in pom.xml
        <dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-mail</artifactId>
		</dependency>

		<dependency>
			<groupId>com.razorpay</groupId>
			<artifactId>razorpay-java</artifactId>
			<version>1.4.7</version>
		</dependency>

		<dependency>
			<groupId>com.stripe</groupId>
			<artifactId>stripe-java</artifactId>
			<version>26.12.0</version>
		</dependency>


	</dependencies>


# create the interface PaymentService.java in service package
package com.mackodev.service;

import com.mackodev.modal.Order;
import com.mackodev.modal.PaymentOrder;
import com.mackodev.modal.User;
import com.razorpay.PaymentLink;

import java.util.Set;

public interface PaymentService {

    PaymentOrder createOrder(User user, Set<Order> orders);
    PaymentOrder getPaymentOrderById(Long orderId);
    PaymentOrder getPaymentOrderByPaymentId(String orderId);
    Boolean ProceedPaymentOrder (PaymentOrder paymentOrder, String paymentId, String paymentLinkId);
    PaymentLink createRazorpayPaymentLink(User user, Long amount, Long orderId);
    String createStripePaymentLink(User user, Long amount, Long orderId);
}


# then create the paymentOrderRepository.java in repository package
package com.mackodev.repository;

import com.mackodev.modal.PaymentOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentOrderRepository extends JpaRepository<PaymentOrder, Long> {

    PaymentOrder findByPaymentLinkId(String paymentId);
}



# then create the implementation, in impl package create a new class PaymentServiceImpl.java

package com.mackodev.service.impl;

import com.mackodev.domain.PaymentOrderStatus;
import com.mackodev.domain.PaymentStatus;
import com.mackodev.modal.Order;
import com.mackodev.modal.PaymentOrder;
import com.mackodev.modal.User;
import com.mackodev.repository.OrderRepository;
import com.mackodev.repository.PaymentOrderRepository;
import com.mackodev.service.PaymentService;
import com.razorpay.Payment;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private PaymentOrderRepository paymentOrderRepository;
    private OrderRepository orderRepository;

    private String apiKey = "apikey";
    private String apiSecret = "apisecret";
    private String stripeSecretKey = "stripesecretkey";

    @Override
    public PaymentOrder createOrder(User user, Set<Order> orders) {
        Long amount = orders.stream().mapToLong(Order::getTotalSellingPrice).sum();

        PaymentOrder paymentOrder = new PaymentOrder();
        paymentOrder.setAmount(amount);
        paymentOrder.setUser(user);
        paymentOrder.setOrders(orders);
        return paymentOrderRepository.save(paymentOrder);
    }

    @Override
    public PaymentOrder getPaymentOrderById(Long orderId) throws Exception {

        return paymentOrderRepository.findById(orderId).orElseThrow(()-> new Exception("The requested payment order could not be found."));
    }

    @Override
    public PaymentOrder getPaymentOrderByPaymentId(String orderId) throws Exception {
        PaymentOrder paymentOrder = paymentOrderRepository.findByPaymentLinkId(orderId);
        if (paymentOrder == null) {
            throw new Exception("No payment order found for the provided payment link.");
        }
        return paymentOrder;
    }

    @Override
    public Boolean ProceedPaymentOrder(PaymentOrder paymentOrder, String paymentId, String paymentLinkId) throws RazorpayException {

        if (paymentOrder.getStatus().equals(PaymentOrderStatus.PENDING)) {
            RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);

            Payment payment = razorpay.payments.fetch(paymentId);

            String status = payment.get("status");
            if (status.equals("captured")) {
                Set<Order> orders = paymentOrder.getOrders();
                for (Order order:orders) {
                    order.setPaymentStatus(PaymentStatus.COMPLETED);
                    orderRepository.save(order);
                }
                paymentOrder.setStatus(PaymentOrderStatus.SUCCESS);
                paymentOrderRepository.save(paymentOrder);
                return true;
            }
            paymentOrder.setStatus(PaymentOrderStatus.FAILED);
            paymentOrderRepository.save(paymentOrder);
            return false;

        }
        return false;
    }

    @Override
    public PaymentLink createRazorpayPaymentLink(User user, Long amount, Long orderId) throws RazorpayException {
        amount = amount * 100;

        try {
            RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);

            JSONObject paymentLinkRequest = new JSONObject();
            paymentLinkRequest.put("amount", amount);
            paymentLinkRequest.put("currency", "USD");

            JSONObject customer = new JSONObject();
            customer.put("name", user.getFullName());
            customer.put("email", user.getEmail());
            paymentLinkRequest.put("customer", customer);

            JSONObject notify = new JSONObject();
            notify.put("email", true);
            paymentLinkRequest.put("notify", notify);

            paymentLinkRequest.put("callback_url", "http://localhost:3000/payment-success/" + orderId);
            paymentLinkRequest.put("callback_method", "get");

            PaymentLink paymentLink = razorpay.paymentLink.create(paymentLinkRequest);

            String paymentLinkUrl = paymentLink.get("short_url");
            String paymentLinkId = paymentLink.get("id");

            return paymentLink;
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
            throw new RazorpayException(e.getMessage());
        }
    }

    @Override
    public String createStripePaymentLink(User user, Long amount, Long orderId) throws StripeException {
        Stripe.apiKey = stripeSecretKey;

        SessionCreateParams params = SessionCreateParams.builder()
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/payment-success/" + orderId)
                .setCancelUrl("http://localhost:3000/payment-cancel")
                .addLineItem(SessionCreateParams.LineItem.builder()
                        .setQuantity(1L)
                        .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("usd")
                                .setUnitAmount(amount * 100)
                                .setProductData(
                                        SessionCreateParams
                                                .LineItem.PriceData.ProductData
                                                .builder().setName("Juan Graphico Payment")
                                                .build()
                                ).build()
                        ).build()
                ).build();

        Session session = Session.create(params);
        return session.getUrl();
    }
}


# then create the controller named, PaymentController.java

package com.mackodev.controller;

import com.mackodev.modal.*;
import com.mackodev.response.ApiResponse;
import com.mackodev.response.PaymentLinkResponse;
import com.mackodev.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    private final PaymentService paymentService;
    private final UserService userService;
    private final SellerService sellerService;
    private final OrderService orderService;
    private final SellerReportService sellerReportService;

    @GetMapping("/{paymentId}")
    public ResponseEntity<ApiResponse> paymentSuccessHandler(
            @PathVariable String paymentId,
            @RequestParam String paymentLinkId,
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        PaymentLinkResponse paymentResponse;

        PaymentOrder paymentOrder = paymentService.getPaymentOrderByPaymentId(paymentLinkId);

        boolean paymentSuccess = paymentService.ProceedPaymentOrder(paymentOrder, paymentId, paymentLinkId);

        if (paymentSuccess) {
            for (Order order:paymentOrder.getOrders()) {
                Seller seller = sellerService.getSellerById(order.getSellerId());
                SellerReport report = sellerReportService.getSellerReport(seller);
                report.setTotalOrders(report.getTotalOrders() + 1);
                report.setTotalEarnings(report.getTotalEarnings() + order.getTotalSellingPrice());
                report.setTotalSales(report.getTotalSales() + order.getOrderItems().size());
                sellerReportService.updateSellerReport(report);
            }
        }

        ApiResponse res = new ApiResponse();
        res.setMessage("Payment Successful");

        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }
}


# THEN IN OrderController.java add this code for payment functionality

public class OrderController {

    private final OrderService orderService;
    private final UserService userService;
    private final CartService cartService;
    private final SellerService sellerService;
    private final SellerReportService sellerReportService;
    private final PaymentService paymentService;
    private final PaymentOrderRepository paymentOrderRepository;

    @PostMapping()
    public ResponseEntity<PaymentLinkResponse> createOrderHandler(
            @RequestBody Address shippingAddress,
            @RequestParam PaymentMethod paymentMethod,
            @RequestHeader("Authorization")String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.findUserCart(user);
        Set<Order> orders = orderService.createOrder(user, shippingAddress, cart);

        PaymentOrder paymentOrder = paymentService.createOrder(user, orders);

        PaymentLinkResponse res = new PaymentLinkResponse();

        if (paymentMethod.equals(PaymentMethod.RAZORPAY)) {
            PaymentLink payment = paymentService.createRazorpayPaymentLink(user, paymentOrder.getAmount(), paymentOrder.getId());
            String paymentUrl = payment.get("short_url");
            String paymentUrlId = payment.get("id");

            res.setPayment_link_url(paymentUrl);

            paymentOrder.setPaymentLinkId(paymentUrlId);
            paymentOrderRepository.save(paymentOrder);
        }
        else {
            String paymentUrl = paymentService.createStripePaymentLink(user, paymentOrder.getAmount(), paymentOrder.getId());
            res.setPayment_link_url(paymentUrl);
        }

        return new ResponseEntity<>(res, HttpStatus.OK);

    }

    @GetMapping("/user")



# NOW THE PAYMENT API IS READY NEXT WELL CREATE THE TRANSACTTION SERVICE

# first create the repository named, TransactionRepository.java
package com.mackodev.repository;

import com.mackodev.modal.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    List<Transaction> findBySellerId(Long sellerId);
}


# then create the service methods in service package named TransactionService.java

package com.mackodev.service;

import com.mackodev.modal.Order;
import com.mackodev.modal.Seller;
import com.mackodev.modal.Transaction;

import java.util.List;

public interface TransactionService {

    Transaction createTransaction(Order order);
    List<Transaction> getTransactionsBySellerId(Seller seller);
    List<Transaction> getAllTransactions();
}


# then implement all the methods, create class in impl package named TransactionServiceImpl.java
package com.mackodev.service.impl;

import com.mackodev.modal.Order;
import com.mackodev.modal.Seller;
import com.mackodev.modal.Transaction;
import com.mackodev.repository.SellerRepository;
import com.mackodev.repository.TransactionRepository;
import com.mackodev.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final SellerRepository sellerRepository;

    @Override
    public Transaction createTransaction(Order order) {
        Seller seller = sellerRepository.findById(order.getSellerId()).get();

        Transaction transaction = new Transaction();
        transaction.setSeller(seller);
        transaction.setCustomer(order.getUser());
        transaction.setOrder(order);

        return transactionRepository.save(transaction);
    }

    @Override
    public List<Transaction> getTransactionsBySellerId(Seller seller) {
        return transactionRepository.findBySellerId(seller.getId());
    }

    @Override
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }
}


# then create the controller for this
# in PaymentController.java
public class PaymentController {

    private final PaymentService paymentService;
    private final UserService userService;
    private final SellerService sellerService;
    private final OrderService orderService;
    private final SellerReportService sellerReportService;
    private final TransactionService transactionService;

---------------------------------------------------------------

    if (paymentSuccess) {
            for (Order order:paymentOrder.getOrders()) {
                transactionService.createTransaction(order);
                Seller seller = sellerService.getSellerById(order.getSellerId());
                SellerReport report = sellerReportService.getSellerReport(seller);


# then create this controller named TransactionController.java
package com.mackodev.controller;

import com.mackodev.modal.Seller;
import com.mackodev.modal.Transaction;
import com.mackodev.service.SellerService;
import com.mackodev.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/transactions")
public class TransactionController {

    private final TransactionService transactionService;
    private final SellerService sellerService;

    @GetMapping("/seller")
    public ResponseEntity<List<Transaction>> getTransactionBySeller(@RequestHeader("Authorization") String jwt) throws Exception {
        Seller seller = sellerService.getSellerProfile(jwt);

        List<Transaction> transactions = transactionService.getTransactionsBySellerId(seller);
        return ResponseEntity.ok(transactions);
    }

    @GetMapping
    public ResponseEntity<List<Transaction>> getAllTransactions() {
        List<Transaction> transactions = transactionService.getAllTransactions();
        return ResponseEntity.ok(transactions);
    }
}


# NEXT LETS CREATE THE WISHLIST SERVICE AND THE API METHODS
# create the repository first, WishlistRepository.java
package com.mackodev.repository;

import com.mackodev.modal.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WishlistRepository extends JpaRepository<Wishlist, Long> {

    Wishlist findByUserId(Long userId);
}


# create the service, WishlistService.java
package com.mackodev.service;

import com.mackodev.modal.Product;
import com.mackodev.modal.User;
import com.mackodev.modal.Wishlist;

public interface WishlistService {
    Wishlist createWishlist(User user);
    Wishlist getWishlistByUserId(User user);
    Wishlist addProductToWishlist(User user, Product product);
}


# then create the implementation in impl, WishlistServiceImpl.java
package com.mackodev.service.impl;

import com.mackodev.modal.Product;
import com.mackodev.modal.User;
import com.mackodev.modal.Wishlist;
import com.mackodev.repository.WishlistRepository;
import com.mackodev.service.WishlistService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WishlistServiceImpl implements WishlistService {
    private final WishlistRepository wishlistRepository;

    @Override
    public Wishlist createWishlist(User user) {
        Wishlist wishlist = new Wishlist();
        wishlist.setUser(user);
        return wishlistRepository.save(wishlist);
    }

    @Override
    public Wishlist getWishlistByUserId(User user) {
        Wishlist wishlist = wishlistRepository.findByUserId(user.getId());

        if (wishlist == null) {
            wishlist = createWishlist(user);
        }
        return wishlist;
    }

    @Override
    public Wishlist addProductToWishlist(User user, Product product) {
        Wishlist wishlist = getWishlistByUserId(user);

        if (wishlist.getProducts().contains(product)) {
            wishlist.getProducts().remove(product);
        }
        else wishlist.getProducts().add(product);

        return wishlistRepository.save(wishlist);
    }
}


# then create the controller, WishlistController.java
package com.mackodev.controller;

import com.mackodev.exceptions.ProductException;
import com.mackodev.modal.Product;
import com.mackodev.modal.User;
import com.mackodev.modal.Wishlist;
import com.mackodev.service.ProductService;
import com.mackodev.service.UserService;
import com.mackodev.service.WishlistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;
    private final UserService userService;
    private final ProductService productService;

    @GetMapping()
    public ResponseEntity<Wishlist> getWishlistByUserId(@RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Wishlist wishlist = wishlistService.getWishlistByUserId(user);
        return ResponseEntity.ok(wishlist);
    }

    @PostMapping("/add-product/{productId}")
    public ResponseEntity<Wishlist> addProductToWishlist(@PathVariable Long productId, @RequestHeader("Authorization") String jwt) throws Exception {

        Product product = productService.findProductById(productId);
        User user = userService.findUserByJwtToken(jwt);
        Wishlist updatedWishlist = wishlistService.addProductToWishlist(user, product);

        return ResponseEntity.ok(updatedWishlist);

    }

}


# NEXT WELL BE THE REVIEW API
# we forgot to create the create review request so create this first inside request package, CreateReviewRequest.java
package com.mackodev.request;

import lombok.Data;

import java.util.List;

@Data
public class CreateReviewRequest {

    private String reviewText;
    private double reviewRating;
    private List<String> productImages;
}



# create first the repository, ReviewRepository.java
package com.mackodev.repository;

import com.mackodev.modal.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findByProductId(Long productId);
}


# then create the service, ReviewService.java 
package com.mackodev.service;

import com.mackodev.modal.Product;
import com.mackodev.modal.Review;
import com.mackodev.modal.User;
import com.mackodev.request.CreateReviewRequest;

import java.util.List;

public interface ReviewService {

    Review createReview(CreateReviewRequest req, User user, Product product);

    List<Review> getReviewByProductId(Long productId);

    Review updateReview(Long reviewId, String reviewText, double rating, Long userId);

    void deleteReview(Long reviewId, Long userId);

    Review getReviewById(Long reviewId);
}


# then create the implementation, impl package ReviewServiceImpl.java

package com.mackodev.service.impl;

import com.mackodev.modal.Product;
import com.mackodev.modal.Review;
import com.mackodev.modal.User;
import com.mackodev.repository.ReviewRepository;
import com.mackodev.request.CreateReviewRequest;
import com.mackodev.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;

    @Override
    public Review createReview(CreateReviewRequest req, User user, Product product) {
        Review review = new Review();
        review.setUser(user);
        review.setProduct(product);
        review.setReviewText(req.getReviewText());
        review.setRating(req.getReviewRating());
        review.setProductImages(req.getProductImages());

        product.getReviews().add(review);
        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getReviewByProductId(Long productId) {
        return reviewRepository.findByProductId(productId);
    }

    @Override
    public Review updateReview(Long reviewId, String reviewText, double rating, Long userId) throws Exception {
        Review review = getReviewById(reviewId);

        if (review.getUser().getId().equals(userId)) {
            review.setReviewText(reviewText);
            review.setRating(rating);
            return reviewRepository.save(review);
        }
        throw new Exception("You are not authorized to update this review.");
    }

    @Override
    public void deleteReview(Long reviewId, Long userId) throws Exception {
        Review review = getReviewById(reviewId);
        if (review.getUser().getId().equals(userId)) {
            throw new Exception("You are not authorized to delete this review.");
        }
        reviewRepository.delete(review);

    }

    @Override
    public Review getReviewById(Long reviewId) throws Exception {
        return reviewRepository.findById(reviewId).orElseThrow(()-> new Exception("The requested review could not be found."));
    }
}


# then create the controller, ReviewController.java
package com.mackodev.controller;

import com.mackodev.exceptions.ProductException;
import com.mackodev.modal.Product;
import com.mackodev.modal.Review;
import com.mackodev.modal.User;
import com.mackodev.request.CreateReviewRequest;
import com.mackodev.response.ApiResponse;
import com.mackodev.service.ProductService;
import com.mackodev.service.ReviewService;
import com.mackodev.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ReviewController {
    private final ReviewService reviewService;
    private final UserService userService;
    private final ProductService productService;

    @GetMapping("/products/{productId}/reviews")
    public ResponseEntity<List<Review>> getReviewsByProductId(@PathVariable Long productId) {

        List<Review> reviews = reviewService.getReviewByProductId(productId);
        return ResponseEntity.ok(reviews);
    }

    @PostMapping("/products/{productId}/reviews")
    public ResponseEntity<Review> writeReview(
            @RequestBody CreateReviewRequest req,
            @PathVariable Long productId,
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Product product = productService.findProductById(productId);

        Review review = reviewService.createReview(req, user, product);
        return ResponseEntity.ok(review);
    }

    @PatchMapping("/reviews/{reviewId}")
    public ResponseEntity<Review> updateReview(
            @RequestBody CreateReviewRequest req,
            @PathVariable Long reviewId,
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        Review review = reviewService.updateReview(
                reviewId,
                req.getReviewText(),
                req.getReviewRating(),
                user.getId()
        );
        return ResponseEntity.ok(review);
    }

    @DeleteMapping("/reviews/{reviewId}")
    public ResponseEntity<ApiResponse> deleteReview(
            @PathVariable Long reviewId,
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        reviewService.deleteReview(reviewId, user.getId());

        ApiResponse res = new ApiResponse();
        res.setMessage("Review deleted successfully");

        return ResponseEntity.ok(res);
    }


}


# THEN NEXT WELL CREATE THE COUPON API
# first create the CouponRepository.java
package com.mackodev.repository;

import com.mackodev.modal.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CouponRepository extends JpaRepository<Coupon, Long> {
    Coupon findByCode(String code);
}


# create the service, CouponService.java
package com.mackodev.service;

import com.mackodev.modal.Cart;
import com.mackodev.modal.Coupon;
import com.mackodev.modal.User;

import java.util.List;

public interface CouponService {
    Cart applyCoupon(String code, double orderValue, User user) throws Exception;
    Cart removeCoupon(String code, User user) throws Exception;
    Coupon findCouponById(Long id) throws Exception;
    Coupon createCoupon(Coupon coupon);
    List<Coupon> findAllCoupons();
    void deleteCoupon(Long id) throws Exception;
}


# then create the implementation, CouponServiceImpl.java
package com.mackodev.service.impl;

import com.mackodev.modal.Cart;
import com.mackodev.modal.Coupon;
import com.mackodev.modal.User;
import com.mackodev.repository.CartRepository;
import com.mackodev.repository.CouponRepository;
import com.mackodev.repository.UserRepository;
import com.mackodev.service.CouponService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CouponServiceImpl implements CouponService {

    private final CouponRepository couponRepository;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;

    @Override
    public Cart applyCoupon(String code, double orderValue, User user) throws Exception {
        Coupon coupon = couponRepository.findByCode(code);

        Cart cart = cartRepository.findByUserId(user.getId());

        if (coupon == null) {
            throw new Exception("Invalid coupon code.");
        }
        if (user.getUsedCoupons().contains(coupon)) {
            throw new Exception("This coupon has already been used.");
        }
        if (orderValue < coupon.getMinimumOrderValue()) {
            throw new Exception("This coupon is valid for a minimum order value of " + coupon.getMinimumOrderValue());
        }
        if (coupon.isActive() && LocalDate.now().isAfter(coupon.getValidityStartDate()) && LocalDate.now().isBefore(coupon.getValidityEndDate())) {
            user.getUsedCoupons().add(coupon);
            userRepository.save(user);

            double discountedPrice = (cart.getTotalSellingPrice() * coupon.getDiscountPercentage()) / 100;

            cart.setTotalSellingPrice(cart.getTotalSellingPrice() - discountedPrice);
            cart.setCouponCode(code);
            cartRepository.save(cart);
            return cart;
        }
        throw new Exception("This coupon is not currently valid.");
    }

    @Override
    public Cart removeCoupon(String code, User user) throws Exception {
        Coupon coupon = couponRepository.findByCode(code);

        if (coupon == null) {
            throw new Exception("Coupon not found.");
        }
        Cart cart = cartRepository.findByUserId(user.getId());
        double discountedPrice = (cart.getTotalSellingPrice() * coupon.getDiscountPercentage()) / 100;

        cart.setTotalSellingPrice(cart.getTotalSellingPrice() + discountedPrice);
        cart.setCouponCode(null);

        return cartRepository.save(cart);
    }

    @Override
    public Coupon findCouponById(Long id) throws Exception {
        return couponRepository.findById(id).orElseThrow(()-> new Exception("Coupon not found."));
    }

    @Override
    @PreAuthorize("hasRole ('ADMIN')")
    public Coupon createCoupon(Coupon coupon) {
        return couponRepository.save(coupon);
    }

    @Override
    public List<Coupon> findAllCoupons() {
        return couponRepository.findAll();
    }

    @Override
    @PreAuthorize("hasRole ('ADMIN')")
    public void deleteCoupon(Long id) throws Exception {
        findCouponById(id);
        couponRepository.deleteById(id);
    }
}


# then create the controller, AdminCouponController.java
package com.mackodev.controller;

import com.mackodev.modal.Cart;
import com.mackodev.modal.Coupon;
import com.mackodev.modal.User;
import com.mackodev.service.CartService;
import com.mackodev.service.CouponService;
import com.mackodev.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/coupons")
public class AdminCouponController {

    private final CouponService couponService;
    private final UserService userService;
    private final CartService cartService;

    @PostMapping("/apply")
    public ResponseEntity<Cart> applyCoupon(
            @RequestParam String apply,
            @RequestParam String code,
            @RequestParam double orderValue,
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Cart cart;

        if (apply.equals("true")) {
            cart = couponService.applyCoupon(code, orderValue, user);
        }
        else {
            cart = couponService.removeCoupon(code, user);
        }

        return ResponseEntity.ok(cart);
    }

    @PostMapping("/admin/create")
    public ResponseEntity<Coupon> createCoupon(@RequestBody Coupon coupon) {
        Coupon createdCoupon = couponService.createCoupon(coupon);
        return ResponseEntity.ok(createdCoupon);
    }

    @DeleteMapping("/admin/delete/{id}")
    public ResponseEntity<?> deleteCoupon(@PathVariable Long id) throws Exception {
        couponService.deleteCoupon(id);
        return ResponseEntity.ok("Coupon deleted successfully.");
    }

    @GetMapping("/admin/all")
    public ResponseEntity<List<Coupon>> getAllCoupons() {
        List<Coupon> coupons = couponService.findAllCoupons();
        return ResponseEntity.ok(coupons);
    }
}


# NEXT WELL BE THE HOME API 

# First create the interface repository named HomeCategoryRepository
package com.mackodev.repository;

import com.mackodev.modal.HomeCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HomeCategoryRepository extends JpaRepository<HomeCategory, Long> {
}


# then create the service named HomeCategoryService
package com.mackodev.service;

import com.mackodev.modal.HomeCategory;

import java.util.List;

public interface HomeCategoryService {
    HomeCategory createHomeCategory(HomeCategory homeCategory);
    List<HomeCategory> createCategories(List<HomeCategory> homeCategories);
    HomeCategory updateHomeCategory(HomeCategory homeCategory, Long id);
    List<HomeCategory> getAllHomeCategories();
}


# then create the implementation, named HomeCategoryServiceImpl
package com.mackodev.service.impl;

import com.mackodev.modal.HomeCategory;
import com.mackodev.repository.HomeCategoryRepository;
import com.mackodev.service.HomeCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HomeCategoryServiceImpl implements HomeCategoryService {
    private final HomeCategoryRepository homeCategoryRepository;

    @Override
    public HomeCategory createHomeCategory(HomeCategory homeCategory) {
        return homeCategoryRepository.save(homeCategory);
    }

    @Override
    public List<HomeCategory> createCategories(List<HomeCategory> homeCategories) {
        if (homeCategoryRepository.findAll().isEmpty()) {
            return homeCategoryRepository.saveAll(homeCategories);
        }
        return homeCategoryRepository.findAll();
    }

    @Override
    public HomeCategory updateHomeCategory(HomeCategory category, Long id) throws Exception {
        HomeCategory existingCategory = homeCategoryRepository.findById(id)
                .orElseThrow(() -> new Exception("Category not found"));

        if (category.getImage() != null) {
            existingCategory.setImage(category.getImage());
        }
        if (category.getCategoryId() != null) {
            existingCategory.setCategoryId(category.getCategoryId());
        }
        return homeCategoryRepository.save(existingCategory);
    }

    @Override
    public List<HomeCategory> getAllHomeCategories() {
        return homeCategoryRepository.findAll();
    }
}


# then create the endpoint in controller, HomeCategoryController
package com.mackodev.controller;

import com.mackodev.modal.Home;
import com.mackodev.modal.HomeCategory;
import com.mackodev.service.HomeCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class HomeCategoryController {
    private final HomeCategoryService homeCategoryService;

    @PostMapping("/home/categories")
    public ResponseEntity<Home> createHomeCategories(@RequestBody List<HomeCategory> homeCategories) {
        List<HomeCategory> categories = homeCategoryService.createCategories(homeCategories);
        Home home = homeService.createHomePageData(categories);
        return new ResponseEntity<>(home, HttpStatus.ACCEPTED);
    }
}


# as you can see, we didnt created the homeService yet, so lets create it

# in service create this, HomeService
package com.mackodev.service;

import com.mackodev.modal.Home;
import com.mackodev.modal.HomeCategory;

import java.util.List;

public interface HomeService {
    public Home createHomePageData(List<HomeCategory> allCategories);
}


# then create the implementation, HomeServiceImpl

package com.mackodev.service.impl;

import com.mackodev.domain.HomeCategorySection;
import com.mackodev.modal.Deal;
import com.mackodev.modal.Home;
import com.mackodev.modal.HomeCategory;
import com.mackodev.service.HomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HomeServiceImpl implements HomeService {

    @Override
    public Home createHomePageData(List<HomeCategory> allCategories) {

        List<HomeCategory> gridCategories = allCategories.stream()
                .filter(category -> category.getSection() == HomeCategorySection.GRID)
                .collect(Collectors.toList());

        List<HomeCategory> shopByCategories = allCategories.stream()
                .filter(category -> category.getSection() == HomeCategorySection.SHOP_BY_CATEGORIES)
                .collect(Collectors.toList());

        List<HomeCategory> electricCategories = allCategories.stream()
                .filter(category -> category.getSection() == HomeCategorySection.ELECTRIC_CATEGORIES)
                .collect(Collectors.toList());

        List<HomeCategory> dealCategories = allCategories.stream()
                .filter(category -> category.getSection() == HomeCategorySection.DEALS)
                .toList();

        List<Deal> createdDeals = new ArrayList<>();

        return null;
    }
}


# lets add DealRepository, in repository create this DealRepository
package com.mackodev.repository;

import com.mackodev.modal.Deal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DealRepository extends JpaRepository<Deal, Long> {
}

# then back to HomeServiceImpl.java add this

        List<HomeCategory> dealCategories = allCategories.stream()
                .filter(category -> category.getSection() == HomeCategorySection.DEALS)
                .toList();

        List<Deal> createdDeals = new ArrayList<>();

        if (dealRepository.findAll().isEmpty()) {
            List<Deal> deals = allCategories.stream()
                    .filter(category -> category.getSection() == HomeCategorySection.DEALS)
                    .map(category -> new Deal(null, 10, category))
                    .collect(Collectors.toList());
            createdDeals = dealRepository.saveAll(deals);
        } else createdDeals = dealRepository.findAll();

        Home home = new Home();
        home.setGrid(gridCategories);
        home.setShopByCategories(shopByCategories);
        home.setElectricCategories(electricCategories);
        home.setDeals(createdDeals);
        home.setDealCategories(dealCategories);


        return home;
    }
}

# then back to HomeCategoryController we can import the home service and add more admin api endpoint

package com.mackodev.controller;

import com.mackodev.modal.Home;
import com.mackodev.modal.HomeCategory;
import com.mackodev.service.HomeCategoryService;
import com.mackodev.service.HomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class HomeCategoryController {
    private final HomeCategoryService homeCategoryService;
    private final HomeService homeService;

    @PostMapping("/home/categories")
    public ResponseEntity<Home> createHomeCategories(@RequestBody List<HomeCategory> homeCategories) {
        List<HomeCategory> categories = homeCategoryService.createCategories(homeCategories);
        Home home = homeService.createHomePageData(categories);
        return new ResponseEntity<>(home, HttpStatus.ACCEPTED);
    }

    @GetMapping("/admin/home-category")
    public ResponseEntity<List<HomeCategory>> getHomeCategory() throws Exception {

        List<HomeCategory> categories = homeCategoryService.getAllHomeCategories();
        return ResponseEntity.ok(categories);
    }

    @PatchMapping("/admin/home-category/{id}")
    public ResponseEntity<HomeCategory> updateHomeCategory(@PathVariable Long id, @RequestBody HomeCategory homeCategory) throws Exception {

        HomeCategory updatedCategory = homeCategoryService.updateHomeCategory(homeCategory, id);
        return ResponseEntity.ok(updatedCategory);
    }
}


# then create an AdminController in controller
package com.mackodev.controller;

import com.mackodev.domain.AccountStatus;
import com.mackodev.modal.Seller;
import com.mackodev.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AdminController {
    private final SellerService sellerService;

    @PatchMapping("/seller/{id}/status/{status}")
    public ResponseEntity<Seller> updateSellerStatus(
            @PathVariable Long id,
            @PathVariable AccountStatus status
            ) throws Exception {

        Seller updatedSeller = sellerService.updateSellerAccountStatus(id, status);
        return ResponseEntity.ok(updatedSeller);
    }
}


# then if we want to edit or delete the deal by the admin we need to create another service
# create service named, DealService
package com.mackodev.service;

import com.mackodev.modal.Deal;

import java.util.List;

public interface DealService {
    List<Deal> getDeal();
    Deal createDeal(Deal deal);
    Deal updateDeal(Deal deal, Long id) throws Exception;
    void deleteDeal(Long id) throws Exception;
}



# then create the implementation, DealServiceImpl
package com.mackodev.service.impl;

import com.mackodev.modal.Deal;
import com.mackodev.modal.HomeCategory;
import com.mackodev.repository.DealRepository;
import com.mackodev.repository.HomeCategoryRepository;
import com.mackodev.service.DealService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DealServiceImpl implements DealService {
    private final DealRepository dealRepository;
    private final HomeCategoryRepository homeCategoryRepository;

    @Override
    public List<Deal> getDeal() {
        return dealRepository.findAll();
    }

    @Override
    public Deal createDeal(Deal deal) {
        HomeCategory category = homeCategoryRepository.findById(deal.getCategory().getId()).orElse(null);

        Deal newDeal = dealRepository.save(deal);
        newDeal.setCategory(category);
        newDeal.setDiscount(deal.getDiscount());
        return dealRepository.save(newDeal);
    }

    @Override
    public Deal updateDeal(Deal deal, Long id) throws Exception {
        Deal existingDeal = dealRepository.findById(id).orElse(null);
        HomeCategory category = homeCategoryRepository.findById(deal.getCategory().getId()).orElse(null);

        if (existingDeal != null) {
            if (deal.getDiscount() != null) {
                existingDeal.setDiscount(deal.getDiscount());
            }

            if (category != null) {
                existingDeal.setCategory(category);
            }
            return dealRepository.save(existingDeal);
        }
        throw new Exception("Deal not Found.");
    }

    @Override
    public void deleteDeal(Long id) throws Exception {
        Deal deal = dealRepository.findById(id)
                .orElseThrow(() -> new Exception("Deal not Found."));
        dealRepository.delete(deal);

    }
}


# then create the DealController
package com.mackodev.controller;

import com.mackodev.modal.Deal;
import com.mackodev.response.ApiResponse;
import com.mackodev.service.DealService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin/deals")
public class DealController {
    private final DealService dealService;

    @PostMapping
    public ResponseEntity<Deal> createDeals(@RequestBody Deal deals) {
        Deal createdDeals = dealService.createDeal(deals);

        return new ResponseEntity<>(createdDeals, HttpStatus.ACCEPTED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Deal> updateDeal(
            @PathVariable Long id,
            @RequestBody Deal deal
    ) throws Exception {

        Deal updatedDeal = dealService.updateDeal(deal, id);
        return ResponseEntity.ok(updatedDeal);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteDeals(@PathVariable Long id) throws Exception {

        dealService.deleteDeal(id);

        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setMessage("The deal has been successfully deleted.");

        return new ResponseEntity<>(apiResponse, HttpStatus.ACCEPTED);
    }
}


## NEXT WELL GO TO FRONTEND
# npm create vite@latest . -- --template react

# then goto tailwindcss website and follow the intallation guide

# then install the mui goto the website intallation
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components

# then the mui icons
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

# then inside the src, create folder admin, customer, pages
# inside customer/components/Navbar
# and then a file named Navbar.tsx
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FavoriteBorder, Store } from "@mui/icons-material";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Box>
        <div className="flex items-center justify-between lg:px-20 h-[70px] border-b text-gray-200">
          <div>
            <div className="flex items-center gap-2">
              <IconButton>
                <MenuIcon />
              </IconButton>
              <h1 className="logo cursor-pointer text-lg md:text-2xl text-[#ec6a13]">
                Juan Graphico
              </h1>
            </div>
          </div>
          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {true ? (
              <Button className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://imgs.search.brave.com/0T82UtGZ1MJKNUs52cZ1xwH-vaXD2OELuZMouLFaxjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1jZG4uaHlwYi5z/dC9odHRwczovL2h5/cGViZWFzdC5jb20v/aW1hZ2UvMjAyNC8x/Mi8yMy9rYWlqdS1u/by04LXNlYXNvbi0y/LWFuaW1lLTIwMjUt/c3VtbWVyLXByZW1p/ZXJlLWluZm8tMDAw/LmpwZz9maXQ9bWF4/JmNicj0xJnE9OTAm/dz03NTAmaD01MDA"
                />
                <h1 className="font-semibold hidden lg:block">Marcko</h1>
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}
            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton>
              <LocalMallIcon className="text-[#ec6a13]" sx={{ fontSize: 29 }} />
            </IconButton>

            {isLarge && (
              <Button startIcon={<Store />} variant="outlined">
                Become Seller
              </Button>
            )}
          </div>
        </div>
      </Box>
    </>
  );
};

export default Navbar;


# then we need to create custom css for our main page color
# in src create folder Theme then a file named, customTheme.ts
import { createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ec6a13",
    },
    secondary: {
      main: "#12cf5a",
    },
  },
});

export default customTheme;


# then in App.tsx
import { ThemeProvider } from "@mui/material";
import Navbar from "./customer/components/Navbar/Navbar";
import customTheme from "./Theme/customTheme";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
};

export default App;

# then make global color cssm in index.css
@import "tailwindcss";

@theme {
  --color-primary: #ec6a13;
  --color-secondary: #ec1313;
}

.logo {
  font-family: "Playball", serif;
  font-weight: 400;
  font-style: normal;
}


# then in Navbar.tsx edit the code
<div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              <IconButton>
                <MenuIcon />
              </IconButton>
              <h1 className="logo cursor-pointer text-lg md:text-2xl text-primary">
                Juan Graphico
              </h1>
            </div>

            <ul className="flex items-center font-medium text-gray-600">
              {["Men", "Women", "Home & Furniture", "Electronics"].map(
                (item) => (
                  <li className="mainCategory hover:text-primary cursor-pointer hover:border-b-2 h-[70px] px-4 border-primary flex items-center">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>


# then next lets create the category
# create in customer/pages/Home
then a file, Home.tsx, ElectricCategory.tsx, ElectricCategoryCard.tsx

# in Home.tsx
import ElectricCategory from "./ElectricCategory";

const Home = () => {
  return (
    <>
      <div>
        <ElectricCategory />
      </div>
    </>
  );
};

export default Home;


# import in App.tsx
import { ThemeProvider } from "@mui/material";
import Navbar from "./customer/components/Navbar/Navbar";
import customTheme from "./Theme/customTheme";
import Home from "./customer/pages/Home/Home";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;


# also in ElectricCategory.tsx
import ElectricCategoryCard from "./ElectricCategoryCard";

const ElectricCategory = () => {
  return (
    <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b border-b-slate-200">
      {[1, 1, 1, 1, 1, 1, 1].map((item) => (
        <ElectricCategoryCard />
      ))}
    </div>
  );
};

export default ElectricCategory;


# then in ElectricCategoryCard.tsx
const ElectricCategoryCard = () => {
  return (
    <div>
      <img
        className="object-contain h-10"
        src="https://rukminim2.flixcart.com/image/612/612/xif0q/computer/w/u/e/-original-imah46f8th3pnphq.jpeg?q=70"
        alt=""
      />
      <h2 className="font-semibold text-sm">Laptop</h2>
    </div>
  );
};

export default ElectricCategoryCard;


# then to hide the menu hamburger in large screen goto Navbar.tsx
<div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <h1 className="logo cursor-pointer text-lg md:text-2xl text-primary">
                Juan Graphico
              </h1>
            </div>

# inside Home folder, create folder ElectricCategory and moved all the electric category files and update the imports

# in Home folder, create folder CategoryGrid, then file CategoryGrid.tsx
const CategoryGrid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://rukminim2.flixcart.com/image/612/612/kevpwnk0-0/t-shirt/i/d/7/l-11999496-hrx-by-hrithik-roshan-original-imafvggdsfzgcznv.jpeg?q=70"
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/e/b/t/m-t-26-1st-bukkl-original-imah3jdkrk8mmfsb.jpeg?q=70"
          alt=""
        />
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://threadheads.com/cdn/shop/files/Collection_Blank_Tees.jpg?v=1738552161&width=800"
          alt=""
        />
      </div>
      <div className="col-span-3 row-span-12 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://threadheads.com/cdn/shop/files/BlackWomenOversized-Front_0a0dcce6-15db-4400-b935-b79bc1918bb8.jpg?v=1733317364&width=1800"
          alt=""
        />
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://threadheads.com/cdn/shop/files/Gifting_Desktop_Hero_0b2adbd4-008b-4fc7-bfcb-19a3a7e463e3.jpg?v=1736993626&width=1400"
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/f/s/w/m-t122-blyl-dobuddy-original-imahfzx6jaurbphr.jpeg?q=70"
          alt=""
        />
      </div>
    </div>
  );
};

export default CategoryGrid;


# import it to Home.tsx
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import ElectricCategory from "./ElectricCategory/ElectricCategory";

const Home = () => {
  return (
    <>
      <div className="space-y-5 lg:space-y-10 relative pb-20">
        <ElectricCategory />
        <CategoryGrid />
      </div>
    </>
  );
};

export default Home;


# now lets add a slick carousel design on our app
# search to react slick and install this
npm install react-slick --save

npm install slick-carousel --save

# 15:23

# in Home.tsx edit the code

import { Button } from "@mui/material";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import Deal from "./Deal/Deal";
import ElectricCategory from "./ElectricCategory/ElectricCategory";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import { Store } from "@mui/icons-material";

const Home = () => {
  return (
    <>
      <div className="space-y-5 lg:space-y-10 relative pb-20">
        <ElectricCategory />
        <CategoryGrid />
        <div className="pt-20">
          <h1 className="text-lg lg:text-4xl font-black italic pb-5 lg:pb-10 text-center font-display">
            TODAY'S DEAL
          </h1>
          <Deal />
        </div>

        <section className="py-20">
          <h1 className="text-lg lg:text-4xl font-black italic pb-5 lg:pb-10 text-center font-display">
            SHOP BY CATEGORY
          </h1>
          <ShopByCategory />
        </section>

        <section className="lg:px-20 relative h-[200px] lg:h-[500px]">
          <img
            className="w-full h-full transform scale-x-[-1] object-cover"
            src="https://threadheads.com/cdn/shop/files/Gifting_Desktop_Hero_0b2adbd4-008b-4fc7-bfcb-19a3a7e463e3.jpg?v=1736993626&width=1200"
            alt=""
          />
          <div className="absolute top-1/3 left-4 lg:left-[15rem] transform-translate-y-1/2 font-semibold lg:text-4xl space-y-3 text-white">
            <h1>Sell your Product</h1>
            <p className="text-lg md:text-2xl">
              With <span className="logo">Juan Graphico</span>
            </p>

            <div className="pt-6 flex justify-center">
              <Button
                startIcon={<Store />}
                variant="contained"
                size="large"
                className="!bg-tertiary"
              >
                Become Seller
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

# create folder src/customer/pages/Home/Deal.tsx
import DealCard from "./DealCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Deal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
  };

  return (
    <div className="py-5 lg:px-20">
      <div className="flex items-center justify-between">
        <Slider {...settings} className="flex">
          {/* {[1, 1, 1, 1, 1, 1].map((item) => (
            <DealCard />
          ))} */}
          <div>
            <DealCard />
          </div>
          <div>
            <DealCard />
          </div>
          <div>
            <DealCard />
          </div>
          <div>
            <DealCard />
          </div>
          <div>
            <DealCard />
          </div>
          <div>
            <DealCard />
          </div>
          <div>
            <DealCard />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Deal;


# same folder DealCard.tsx
const DealCard = () => {
  return (
    <div className="w-[13rem] cursor-pointer">
      <img
        className="border-x-[7px] border-t-[7px] border-violet-500 w-full h-[12rem] object-cover object-top"
        src="https://threadheads.com/cdn/shop/files/New_Oversized_Colours.jpg?v=1729658337&width=800"
        alt=""
      />
      <div className="border-4 border-black bg-black text-white p-2 text-center">
        <p className="text-lg font-semibold">Oversized Tees</p>
        <p className="text-2xl font-bold">20% OFF</p>
        <p className="text-balance text-lg">Shop Now</p>
      </div>
    </div>
  );
};

export default DealCard;


# still in Home/ShopByCategory/ShopByCategory.tsx
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
  return (
    <div className="flex flex-wrap justify-between lg:px-20 gap-7">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
        <ShopByCategoryCard />
      ))}
    </div>
  );
};

export default ShopByCategory;


same folder/ShopByCategoryCard.tsx
import "./ShopByCategory.css";

const ShopByCategoryCard = () => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
      <div className="custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-tertiary">
        <img
          className="rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
          src="https://threadheads.com/cdn/shop/files/Collection_Wash.jpg?v=1718945650&width=800"
          alt=""
        />
      </div>
      <h1>Wash Tees</h1>
    </div>
  );
};

export default ShopByCategoryCard;


# same folder ShopByCategory.css
.custom-border {
  border: 9px solid;
  border-color: rgb(241, 99, 16) rgb(99, 99, 99);
}


# we need to show hover styled data in navbar
# in src create data/category/level three/menLevelThree.ts

export const menLevelThree = [
  {
    name: "Classic Tees",
    category: "men_t_shirts",
    parentCategoryName: "Topwear",
    parentCategoryId: "men_topwear",
  },
  {
    name: "Oversized Tees",
    category: "men_t_shirts",
    parentCategoryName: "Topwear",
    parentCategoryId: "men_topwear",
  },
  {
    name: "Wash Tees",
    category: "men_t_shirts",
    parentCategoryName: "Topwear",
    parentCategoryId: "men_topwear",
  },
  {
    name: "Kids Tees",
    category: "men_t_shirts",
    parentCategoryName: "Topwear",
    parentCategoryId: "men_topwear",
  },
  {
    name: "Baby Crop Tees",
    category: "men_t_shirts",
    parentCategoryName: "Topwear",
    parentCategoryId: "men_topwear",
  },
  {
    name: "Tanks",
    category: "men_t_shirts",
    parentCategoryName: "Topwear",
    parentCategoryId: "men_topwear",
  },
  {
    name: "Crop Tees",
    category: "men_t_shirts",
    parentCategoryName: "Topwear",
    parentCategoryId: "men_topwear",
  },
  {
    name: "Long Sleeves",
    category: "men_t_shirts",
    parentCategoryName: "Topwear",
    parentCategoryId: "men_topwear",
  },
  {
    name: "Hoodies",
    category: "men_t_shirts",
    parentCategoryName: "Sweats",
    parentCategoryId: "men_sweats",
  },
  {
    name: "Sweatshirts",
    category: "men_t_shirts",
    parentCategoryName: "Sweats",
    parentCategoryId: "men_sweats",
  },
  {
    name: "Tracksuit Set",
    category: "men_t_shirts",
    parentCategoryName: "Sweats",
    parentCategoryId: "men_sweats",
  },
  {
    name: "Tracksuit Set",
    category: "men_t_shirts",
    parentCategoryName: "Sweats",
    parentCategoryId: "men_black&packs",
  },
  {
    name: "Tracksuit Set",
    category: "men_t_shirts",
    parentCategoryName: "Sweats",
    parentCategoryId: "men_black&packs",
  },
  {
    name: "Tracksuit Set",
    category: "men_t_shirts",
    parentCategoryName: "Sweats",
    parentCategoryId: "men_black&packs",
  },
  {
    name: "Tracksuit Set",
    category: "men_t_shirts",
    parentCategoryName: "Sweats",
    parentCategoryId: "men_black&packs",
  },
];


# in data/category/mainCategory.ts
export const mainCategory = [
  {
    name: "Men",
    categoryId: "men",
    level: 1,
    levelTwoCategory: [
      {
        name: "Topwear",
        categoryId: "men_topwear",
        parentCategoryId: "men",
        level: 2,
      },
      {
        name: "Topwear",
        categoryId: "men_topwear",
        parentCategoryId: "men",
        level: 2,
      },
      // {
      //   name: "Topwear",
      //   categoryId: "men_topwear",
      //   parentCategoryId: "men",
      //   level: 2,
      // },
      // {
      //   name: "Topwear",
      //   categoryId: "men_topwear",
      //   parentCategoryId: "men",
      //   level: 2,
      // },
      // {
      //   name: "Topwear",
      //   categoryId: "men_topwear",
      //   parentCategoryId: "men",
      //   level: 2,
      // },
      // {
      //   name: "Topwear",
      //   categoryId: "men_topwear",
      //   parentCategoryId: "men",
      //   level: 2,
      // },
      // {
      //   name: "Topwear",
      //   categoryId: "men_topwear",
      //   parentCategoryId: "men",
      //   level: 2,
      // },
      // {
      //   name: "Topwear",
      //   categoryId: "men_topwear",
      //   parentCategoryId: "men",
      //   level: 2,
      // },
      // {
      //   name: "Topwear",
      //   categoryId: "men_topwear",
      //   parentCategoryId: "men",
      //   level: 2,
      // },
    ],
  },
  {
    name: "Women",
    categoryId: "women",
    level: 1,
    levelTwoCategory: [
      {
        name: "Trendy Fusion Wear",
        categoryId: "women_topwear_fusion_wear",
        parentCategoryId: "Women",
        level: 2,
      },
      {
        name: "Trendy Fusion Wear",
        categoryId: "women_topwear_fusion_wear",
        parentCategoryId: "Women",
        level: 2,
      },
      {
        name: "Trendy Fusion Wear",
        categoryId: "women_topwear_fusion_wear",
        parentCategoryId: "Women",
        level: 2,
      },
      {
        name: "Trendy Fusion Wear",
        categoryId: "women_topwear_fusion_wear",
        parentCategoryId: "Women",
        level: 2,
      },
      {
        name: "Trendy Fusion Wear",
        categoryId: "women_topwear_fusion_wear",
        parentCategoryId: "Women",
        level: 2,
      },
      {
        name: "Trendy Fusion Wear",
        categoryId: "women_topwear_fusion_wear",
        parentCategoryId: "Women",
        level: 2,
      },
      {
        name: "Trendy Fusion Wear",
        categoryId: "women_topwear_fusion_wear",
        parentCategoryId: "Women",
        level: 2,
      },
    ],
  },
  {
    name: "Home & Furniture",
    categoryId: "home_furniture",
    level: 1,
  },
  { name: "Electronics", categoryId: "electronics", level: 1 },
];


# and then src/data/category/level two/menLevelTwo.ts

export const menLevelTwo = [
  {
    name: "Topwear",
    categoryId: "men_topwear",
    parentCategoryId: "men",
    level: 2,
  },
  {
    name: "Sweats",
    categoryId: "men_sweats",
    parentCategoryId: "men",
    level: 2,
  },
  {
    name: "Blanks & Packs",
    categoryId: "men_black&packs",
    parentCategoryId: "men",
    level: 2,
  },
  {
    name: "Popular",
    categoryId: "men_topwear",
    parentCategoryId: "men",
    level: 2,
  },
  {
    name: "Featured",
    categoryId: "men_topwear",
    parentCategoryId: "men",
    level: 2,
  },
];


# and add all your desired data

# then in Navbar folder add a file CategorySheet.tsx

import { Box } from "@mui/material";
import { electronicsLevelThree } from "../../../data/category/level three/electronicsLevelThree";
import { furnitureLevelThree } from "../../../data/category/level three/furnitureLevelThree";
import { menLevelThree } from "../../../data/category/level three/menLevelThree";
import { womenLevelThree } from "../../../data/category/level three/womenLevelThree";
import { electronicsLevelTwo } from "../../../data/category/level two/electrnicsLevelTwo";
import { furnitureLevelTwo } from "../../../data/category/level two/furnitureLevelTwo";
import { menLevelTwo } from "../../../data/category/level two/menLevelTwo";
import { womenLevelTwo } from "../../../data/category/level two/womenLevelTwo";

const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  electronics: electronicsLevelTwo,
  home_furniture: furnitureLevelTwo,
};

const categoryThree: { [key: string]: any[] } = {
  men: menLevelThree,
  women: womenLevelThree,
  electronics: electronicsLevelThree,
  home_furniture: furnitureLevelThree,
};

const CategorySheet = ({ selectedCategory, setShowSheet }: any) => {
  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter(
      (child: any) => child.parentCategoryId == parentCategoryId
    );
  };

  return (
    <Box className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
      <div className="flex text-sm flex-wrap">
        {categoryTwo[selectedCategory]?.map((item, index) => (
          <div
            className={`p-8 lg:w-[20%] ${
              index % 2 === 0 ? "bg-slate-50" : "bg-white"
            }`}
          >
            <p className="font-display text-2xl italic mb-5 font-bold cursor-pointer bg-gradient-to-r from-slate-800 to-slate-800 bg-no-repeat bg-[length:0_3px] hover:bg-[length:80px_3px] bg-left-bottom transition-all duration-500">
              {item.name}
            </p>
            <ul className="space-y-3">
              {childCategory(
                categoryThree[selectedCategory],
                item.categoryId
              ).map((item: any) => (
                <div>
                  <li className="hover:text-primary cursor-pointer">
                    {item.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;


# then edit the Navbar.tsx

import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FavoriteBorder, Store } from "@mui/icons-material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../../data/category/mainCategory";
import { useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);

  return (
    <>
      <Box className="sticky top-0 left-0 right-0 bg-white z-1">
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b border-b-slate-200">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <h1 className="logo text-primary cursor-pointer text-lg md:text-2xl font-display">
                Juan Graphico
              </h1>
              {/* <img
                className="absolute opacity-80 left-54"
                width="20"
                src="https://cdn-icons-png.flaticon.com/128/44/44870.png"
                alt=""
              /> */}
            </div>

            <ul className="flex items-center font-medium text-gray-600">
              {mainCategory.map((item) => (
                <li
                  onMouseEnter={() => {
                    setShowCategorySheet(true);
                    setSelectedCategory(item.categoryId);
                  }}
                  onMouseLeave={() => {
                    setShowCategorySheet(false);
                  }}
                  className="mainCategory bg-gradient-to-r from-amber-500 to-amber-600 bg-no-repeat bg-[length:0_3px] hover:bg-[length:170px_3px] bg-left-bottom transition-all duration-500 cursor-pointer h-[70px] px-4 flex items-center"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {true ? (
              <Button className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://imgs.search.brave.com/0T82UtGZ1MJKNUs52cZ1xwH-vaXD2OELuZMouLFaxjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1jZG4uaHlwYi5z/dC9odHRwczovL2h5/cGViZWFzdC5jb20v/aW1hZ2UvMjAyNC8x/Mi8yMy9rYWlqdS1u/by04LXNlYXNvbi0y/LWFuaW1lLTIwMjUt/c3VtbWVyLXByZW1p/ZXJlLWluZm8tMDAw/LmpwZz9maXQ9bWF4/JmNicj0xJnE9OTAm/dz03NTAmaD01MDA"
                />
                <h1 className="font-semibold hidden lg:block !text-primary">
                  Marcko
                </h1>
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}
            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton>
              <LocalMallIcon className="text-primary" sx={{ fontSize: 29 }} />
            </IconButton>

            {isLarge && (
              <Button
                startIcon={<Store />}
                variant="contained"
                className="!bg-primary"
              >
                Become Seller
              </Button>
            )}
          </div>
        </div>
        {showCategorySheet && (
          <div
            onMouseEnter={() => setShowCategorySheet(true)}
            onMouseLeave={() => setShowCategorySheet(false)}
            className="categorySheet absolute top-[4.41rem] left-20 right-20 "
          >
            <CategorySheet selectedCategory={selectedCategory} />
          </div>
        )}
      </Box>
    </>
  );
};

export default Navbar;

#17:00

# NOW LETS DISPLAY THE INITIAL UI FOR PRODUCTS AND FILTER

# create folder src/customer/pages/Product
# then create file there named, FilterSection.tsx, Product.tsx, ProductCard.css, ProductCard.tsx

# in Product.tsx
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FilterSection from "./FilterSection";
import { FilterAlt } from "@mui/icons-material";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState();

  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };

  return (
    <div className="-z-10 mt-10">
      <div>
        <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2">
          Graphic Tees
        </h1>
      </div>

      <div className="lg:flex">
        <section className="filter_section hidden lg:block w-[20%]">
          <FilterSection />
        </section>
        <div className="w-full lg:w-[80%] space-y-5">
          <div className="flex justify-between items-center px-9 h-[40px]">
            <div className="relative w-[50%]">
              {!isLarge && (
                <IconButton>
                  <FilterAlt />
                </IconButton>
              )}
              {!isLarge && (
                <Box>
                  <FilterSection />
                </Box>
              )}
            </div>

            <FormControl size="small" sx={{ width: "200px" }}>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Age"
                onChange={handleSortChange}
              >
                <MenuItem value={"price_low"}>Price: Low - High</MenuItem>
                <MenuItem value={"price_high"}>Price: High - Low</MenuItem>
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </div>
          <Divider />
          <section className="products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
            {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
              <ProductCard />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Product;


# in ProductCard.tsx

import { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";

const images = [
  "https://threadheads.com/cdn/shop/files/LactoseTolerant-Website-2.jpg?v=1720494721&width=800",
  "https://threadheads.com/cdn/shop/files/Coal-Front_2a8ac3b2-1819-4baf-88de-52277d4158cb.jpg?v=1720494721&width=800",
  "https://threadheads.com/cdn/shop/files/LactoseTolerant-Website-1.jpg?v=1720494721&width=800",
  "https://threadheads.com/cdn/shop/files/LactoseTolerant-Website.jpg?v=1720494721&width=800",
];

const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: any;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <>
      <div className="group px-4 pt-4 relative">
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((item, index) => (
            <img
              className="card-media object-top"
              src={item}
              alt=""
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}

          {isHovered && (
            <div className="indicator flex flex-col items-center space-y-2">
              <div className="flex gap-3">
                <Button className="!min-w-0 !p-3 !rounded-full !bg-white">
                  <Favorite color="primary" />
                </Button>
                <Button className="!min-w-0 !p-3 !rounded-full !bg-white">
                  <ModeComment color="primary" />
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>Penshoppe</h1>
            <p>Lactose</p>
          </div>

          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">₱ 149.00</span>
            <span className="thin-line-through text-gray-400">₱ 250.00</span>
            <span className="text-primary font-semibold">60%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;


# in ProductCard.css
.card {
  @apply relative w-[250px] h-[350px] overflow-hidden;
}

.card-media {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  object-fit: cover;
}

.indicator {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
}

.indicator-button {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.indicator-button.active {
  background-color: rgba(255, 255, 255, 1);
}

.thin-line-through {
  text-decoration: line-through;
  text-decoration-thickness: 1px;
}

.group-hover-effect {
  padding: 1rem;
  transition: transform 0.3s;
}

.group:hover .group-hover-effect {
  transform: translateY(0.25rem);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


# in FilterSection.tsx
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { blue } from "@mui/material/colors";

const FilterSection = () => {
  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r border-r-slate-200">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          size="small"
          className="!text-black cursor-pointer font-semibold"
        >
          clear all
        </Button>
      </div>
      <Divider />

      <section>
        <FormControl>
          <FormLabel
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              pb: "14px",
              // color: blue[400],
            }}
            className="text-2xl font-semibold"
            id="color"
          >
            Color
          </FormLabel>
          <RadioGroup aria-labelledby="color" defaultValue="" name="color">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </section>
    </div>
  );
};

export default FilterSection;


# THEN ADD MORE FILTER BUT FIRST LETS ADD DATA

# in data/Filter create file named, brand.ts, color.ts, discount.ts, price.ts

# in brand.ts
export const brands = [
  { name: "Nike" },
  { name: "Adidas" },
  { name: "Puma" },
  { name: "Reebok" },
  { name: "Under Armour" },
  { name: "Levi's" },
  { name: "H&M" },
  { name: "Zara" },
  { name: "Uniqlo" },
  { name: "GAP" },
  { name: "Tommy Hilfiger" },
  { name: "Calvin Klein" },
  { name: "Lacoste" },
  { name: "Fila" },
  { name: "Superdry" },
  { name: "Diesel" },
  { name: "Jack & Jones" },
  { name: "Gucci" },
  { name: "Versace" },
  { name: "Balenciaga" },
  { name: "Armani" },
  { name: "Hollister" },
  { name: "Abercrombie & Fitch" },
  { name: "The North Face" },
  { name: "Columbia" },
  { name: "Patagonia" },
  { name: "Champion" },
  { name: "Vans" },
  { name: "Converse" },
  { name: "American Eagle" },
];


# in color.ts
export const colors = [
  { name: "Black", hex: "#000000" },
  { name: "Green", hex: "#008000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Red", hex: "#FF0000" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Purple", hex: "#800080" },
  { name: "Navy Blue", hex: "#000080" },
  { name: "Maroon", hex: "#800000" },
  { name: "Peach", hex: "#FFDAB9" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Grey", hex: "#808080" },
  { name: "Teal", hex: "#008080" },
  { name: "Turquoise Blue", hex: "#00CED1" },
  { name: "Mustard", hex: "#FFDB58" },
  { name: "Beige", hex: "#F5F5DC" },
  { name: "Cream", hex: "#FFFDD0" },
  { name: "Sea Green", hex: "#2E8B57" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Brown", hex: "#A52A2A" },
  { name: "Off White", hex: "#FAF0E6" },
  { name: "Burgundy", hex: "#800020" },
  { name: "Cyan", hex: "#00FFFF" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Olive", hex: "#808000" },
  { name: "Lime", hex: "#00FF00" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "Sky Blue", hex: "#87CEEB" },
  { name: "Lavender", hex: "#E6E6FA" },
  { name: "Salmon", hex: "#FA8072" },
  { name: "Gold", hex: "#FFD700" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Khaki", hex: "#F0E68C" },
  { name: "Ivory", hex: "#FFFFF0" },
  { name: "Indigo", hex: "#4B0082" },
  { name: "Mint Green", hex: "#98FF98" },
  { name: "Charcoal", hex: "#36454F" },
  { name: "Plum", hex: "#DDA0DD" },
  { name: "Rust", hex: "#B7410E" },
  { name: "Tan", hex: "#D2B48C" },
  { name: "Aquamarine", hex: "#7FFFD4" },
  { name: "Periwinkle", hex: "#CCCCFF" },
  { name: "Crimson", hex: "#DC143C" },
  { name: "Rose", hex: "#FF007F" },
  { name: "Amber", hex: "#FFBF00" },
  { name: "Chocolate", hex: "#D2691E" },
  { name: "Emerald", hex: "#50C878" },
  { name: "Fuchsia", hex: "#FF00FF" },
  { name: "Lilac", hex: "#C8A2C8" },
  { name: "Slate Gray", hex: "#708090" },
];


# in discount.ts
export const discount = [
  { name: "10% and above", value: 10 },
  { name: "20% and above", value: 20 },
  { name: "30% and above", value: 30 },
  { name: "40% and above", value: 40 },
  { name: "50% and above", value: 50 },
  { name: "60% and above", value: 60 },
  { name: "70% and above", value: 70 },
  { name: "80% and above", value: 80 },
];


# in price.ts
export const price = [
  { name: "Below ₱500", min: 0, max: 500, value: "500" },
  { name: "₱500 - ₱1000", min: 500, max: 1000, value: "500 - 1000" },
  { name: "₱1000 - ₱2000", min: 1000, max: 2000, value: "1000 - 2000" },
  { name: "₱2000 - ₱3000", min: 2000, max: 3000, value: "2000 - 3000" },
  { name: "₱3000 - ₱5000", min: 3000, max: 5000, value: "3000 - 5000" },
  { name: "₱5000 - ₱10000", min: 5000, max: 10000, value: "5000 - 10000" },
  { name: "₱10000 and above", min: 10000, max: null, value: "10000" },
];


# intall the react router dom
npm i react-router-dom

# in main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
 

# then back to FilterSection.tsx add more filter

import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { colors } from "../../../data/Filter/color";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { price } from "../../../data/Filter/price";
import { discount } from "../../../data/Filter/discount";

const FilterSection = () => {
  const [expendColor, setExpendColor] = useState(false);
  const [expandBrand, setExpandBrand] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleExpandColor = () => {
    setExpendColor(!expendColor);
  };

  const handleExpandBrand = () => {
    setExpandBrand(!expandBrand);
  };

  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    console.log("clearAllFilters", searchParams);
    searchParams.forEach((value: any, key: any) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);
  };

  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r border-r-slate-200">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          onClick={clearAllFilters}
          size="small"
          className="!text-black cursor-pointer font-semibold"
        >
          clear all
        </Button>
      </div>
      <Divider />

      <div className="px-9 space-y-6 py-4">
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                pb: "14px",
                // color: blue[400],
              }}
              className="text-2xl font-semibold"
              id="color"
            >
              Color
            </FormLabel>
            <RadioGroup
              aria-labelledby="color"
              defaultValue=""
              name="color"
              onChange={updateFilterParams}
            >
              {colors.slice(0, expendColor ? colors.length : 5).map((item) => (
                <FormControlLabel
                  value={item.name}
                  control={<Radio />}
                  label={
                    <div className="flex items-center gap-3">
                      <p>{item.name}</p>
                      <p
                        style={{ backgroundColor: item.hex }}
                        className={`h-5 w-5 rounded-full ${
                          item.name === "White" ? "border" : ""
                        }`}
                      ></p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>

          <div>
            <button
              onClick={handleExpandColor}
              className="text-slate-600 bg-slate-200 px-4 py-1 rounded-full cursor-pointer hover:text-slate-200 hover:bg-slate-700 flex items-center"
            >
              {expendColor ? "Hide" : `+${colors.length - 5} more`}
            </button>
          </div>
        </section>

        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                pb: "14px",
                // color: blue[400],
              }}
              className="text-2xl font-semibold"
              id="price"
            >
              Price
            </FormLabel>
            <RadioGroup
              aria-labelledby="price"
              onChange={updateFilterParams}
              defaultValue=""
              name="price"
            >
              {price.map((item, index) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>
        <Divider />

        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                pb: "14px",
                // color: blue[400],
              }}
              className="text-2xl font-semibold"
              id="brand"
            >
              Discount
            </FormLabel>
            <RadioGroup
              aria-labelledby="brand"
              onChange={updateFilterParams}
              defaultValue=""
              name="discount"
            >
              {discount.map((item, index) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>
      </div>
    </div>
  );
};

export default FilterSection;



# then lets create the PAGINATION

# in Product.tsx
const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);

  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  return (
    <div className="-z-10 mt-10">

----------------------------------------------------------------


<section className="products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
            {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
              <ProductCard />
            ))}
          </section>
          <div className="flex justify-center py-10">
            <Pagination
              count={10}
              onChange={(e, value) => handlePageChange(value)}
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;


# THEN LETS GOTO PRODUCT DETAILS

# create a folder in customer/pages/ProductDetails/ProductDetails.tsx
import React from "react";
import {
  Add,
  FavoriteBorder,
  LocalMallOutlined,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { Button, Divider } from "@mui/material";
import { green, orange } from "@mui/material/colors";
import SimilarProduct from "./SimilarProduct";

const ProductDetails = () => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src="https://threadheads.com/cdn/shop/files/Black-Hoodie-Women-Front_89855c32-488f-4325-ad25-3ed526c3762d.jpg?v=1727759499&width=600"
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="https://threadheads.com/cdn/shop/files/Black-Hoodie-Women-Front_89855c32-488f-4325-ad25-3ed526c3762d.jpg?v=1727759499&width=600"
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-3xl font-display italic">
            Vintage Sauron Hoodie
          </h1>
          <p className="text-gray-500 font-semibold">The Lord of the Rings</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4.5</span>
              <StarIcon sx={{ color: orange[400], fontSize: "20px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>498 Ratings</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">₱ 149.00</span>
              <span className="line-through text-gray-400">₱ 250.00</span>
              <span className="text-primary font-semibold">60%</span>
            </div>

            <div>
              <p className="text-sm">
                Easy free returns. Fast worldwide shipping
              </p>
            </div>

            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-4">
                <Shield sx={{ color: green[700] }} />
                <p>Official Lord of the Rings merchandise</p>
              </div>
              <div className="flex items-center gap-4">
                <WorkspacePremium sx={{ color: green[700] }} />
                <p>Premium unisex graphic hoodie</p>
              </div>
              <div className="flex items-center gap-4">
                <LocalShipping sx={{ color: green[700] }} />
                <p>90s-inspired boxy fit with dropped shoulders</p>
              </div>
              <div className="flex items-center gap-4">
                <Wallet sx={{ color: green[700] }} />
                <p>Pay on delivery always available</p>
              </div>
            </div>

            <div className="mt-7 space-y-2">
              <h1 className="text-gray-700 font-semibold">QUANTITY</h1>
              <div className="flex items-center gap-2 w-[140px] justify-between">
                <Button
                  disabled={quantity == 1}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <Remove />
                </Button>
                <span>{quantity}</span>
                <Button onClick={() => setQuantity(quantity + 1)}>
                  <Add />
                </Button>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <Button
                fullWidth
                variant="contained"
                startIcon={<LocalMallOutlined />}
                sx={{ py: "1rem" }}
                className="!font-display italic !text-1xl !font-bold"
              >
                Add to Cart
              </Button>

              <Button
                fullWidth
                variant="contained"
                startIcon={<FavoriteBorder />}
                sx={{ py: "1rem", fontSize: "15px" }}
                className="!font-display italic !text-1xl !font-bold"
              >
                Wishlist
              </Button>
            </div>

            <div className="mt-5">
              <p className="text-gray-500 font-semibold">
                Relaxed fit with a modern streetwear vibe. Features drop
                shoulders and a slightly oversized body for that cool, laid-back
                look. Guys can stick to their usual size for a relaxed fit or go
                one size up for an extra baggy look. Girls can choose their
                regular unisex size for an oversized fit or size down for a more
                fitted look. For the detail-oriented, check out our handy size
                chart next to the size options above 👆
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-20">
        <h1 className="font-extrabold text-3xl font-display italic uppercase">
          You May Also Like
        </h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

# then in the same folder ProductDetails
# SimilarProductCard.tsx
const SimilarProductCard = () => {
  return (
    <div>
      <div className="group px-4 pt-4 relative">
        <div className="card">
          <img
            className="card-media object-top"
            src="https://threadheads.com/cdn/shop/files/Natural-Hoodie-Women-Front_07f0aff3-919b-4c4e-a605-877066d4d2eb.jpg?v=1724203427&width=700"
            alt=""
          />
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>Penshoppe</h1>
            <p>Lactose</p>
          </div>

          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">₱ 149.00</span>
            <span className="thin-line-through text-gray-400">₱ 250.00</span>
            <span className="text-primary font-semibold">60%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;


# then same folder create another file
SimilarProduct.tsx

import SimilarProductCard from "./SimilarProductCard";

const SimilarProduct = () => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between gap-4 gap-y-8">
      {[1, 1, 1, 1, 1, 1].map((item) => (
        <SimilarProductCard />
      ))}
    </div>
  );
};

export default SimilarProduct;


# then import in App.tsx
import { ThemeProvider } from "@mui/material";
import Navbar from "./customer/components/Navbar/Navbar";
import customTheme from "./Theme/customTheme";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";
import ProductDetails from "./customer/pages/ProductDetails/ProductDetails";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <Product /> */}
        <ProductDetails />
      </div>
    </ThemeProvider>
  );
};

export default App;


# NEXT LETS ADD REVIEW
# create folder in pages/Review
# then inside create file ReviewCard.tsx
import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid2, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid2 container spacing={9}>
        <Grid2 size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              S
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Sev Bautista</p>
              <p className="opacity-70">2024-01-01</p>
            </div>
          </div>
          <Rating readOnly value={4.5} precision={0.5} />
          <p className="text-gray-600 font-semibold">
            Comfy, warm, great cut on the hood, and elicits laughs. I've got a
            nice collection with different prints!
          </p>
          <div>
            <img
              className="w-24 h-24 object-cover mt-2"
              src="https://d4yxl4pe8dqlj.cloudfront.net/678d2f3b-80ca-4900-ba42-a1d9be42ee02/5d8645fa-cadf-40cd-94ad-77c32d496529/thumb-00001.jpg"
              alt=""
            />
          </div>
        </Grid2>
        <IconButton>
          <Delete sx={{ color: red[400] }} />
        </IconButton>
      </Grid2>
    </div>
  );
};

export default ReviewCard;


# then import on ProductDetails.tsx

chart next to the size options above 👆
              </p>
            </div>

            <div className="mt-12 space-y-5">
              <ReviewCard />
              <Divider />
            </div>
          </div>
        </section>
      </div>

      <div className="mt-20">
        <h1 className="font-extrabold text-3xl font-display italic uppercase">
          You May Also Like
        </h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


# THEN NEXT THE WHOLE REVIEW PAGE

# in Review folder create a file Review.tsx
import StarIcon from "@mui/icons-material/Star";
import {
  Divider,
  LinearProgress,
  linearProgressClasses,
  Stack,
  styled,
} from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ReviewCard from "./ReviewCard";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#388E3C",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

const Review = () => {
  const value = 4.5;

  return (
    <div className="p-10 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[40%] space-y-2">
        <img
          src="https://threadheads.com/cdn/shop/files/Black-Front_5094d408-949f-4d27-89b0-d1b6c6173741.jpg?v=1732790241&width=700"
          alt=""
        />
        <div>
          <div>
            <p className="font-bold text-xl">Juan Graphico</p>
            <p className="text-lg text-gray-600">Men's Oversize Shirt</p>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">₱ 149.00</span>
              <span className="line-through text-gray-400">₱ 250.00</span>
              <span className="text-primary font-semibold">60%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5 w-full">
        <h1 className="font-bold text-2xl font-display italic text-gray-700">
          Reviews & Ratings
        </h1>
        <div className="px-10 py-10 border border-gray-300 rounded-md text-gray-600">
          <div className="flex space-y-10">
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}></Box>
            <p className="font-semibold text-[17px]">Ratings</p>
          </div>

          <div className="space-y-5">
            <h1></h1>
            <div className="flex items-center gap-4">
              <p className="text-1xl font-display italic gap-4">Excellent</p>
              <Stack spacing={2} sx={{ flexGrow: 1 }} color="success">
                <BorderLinearProgress variant="determinate" value={80} />
              </Stack>
              <p className="text-1xl font-display">19833</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-1xl font-display italic">Very Good</p>
              <Stack spacing={2} sx={{ flexGrow: 1 }} color="success">
                <BorderLinearProgress variant="determinate" value={60} />
              </Stack>
              <p className="text-1xl font-display">19833</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-1xl font-display italic">Average</p>
              <Stack spacing={2} sx={{ flexGrow: 1 }} color="success">
                <BorderLinearProgress variant="determinate" value={40} />
              </Stack>
              <p className="text-1xl font-display">19833</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-1xl font-display italic">Poor</p>
              <Stack spacing={2} sx={{ flexGrow: 1 }} color="success">
                <BorderLinearProgress variant="determinate" value={20} />
              </Stack>
              <p className="text-1xl font-display">19833</p>
            </div>
          </div>
        </div>

        {[1, 1, 1, 1, 1, 1].map((item) => (
          <div className="space-y-5 mt-10">
            <ReviewCard /> <Divider />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Review;



# then import in App.tsx
import { ThemeProvider } from "@mui/material";
import Navbar from "./customer/components/Navbar/Navbar";
import customTheme from "./Theme/customTheme";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";
import ProductDetails from "./customer/pages/ProductDetails/ProductDetails";
import Review from "./customer/pages/Review/Review";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        <Review />
      </div>
    </ThemeProvider>
  );
};

export default App;


# NOW LETS DO THE UI FOR CART PAGE

#19:01

# in pages/Cart
# then this files, Cart.tsx, CartItem.tsx, PricingCard.tsx

# Cart.tsx
import { Close, LocalOffer } from "@mui/icons-material";
import CartItem from "./CartItem";
import { orange } from "@mui/material/colors";
import { Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import PricingCard from "./PricingCard";

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");

  const handleChange = (e: any) => {
    setCouponCode(e.target.value);
  };

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="cartItemSection lg:col-span-2 space-y-3">
          {[1, 1, 1, 1, 1].map((item, index) => (
            <CartItem key={index} />
          ))}
        </div>
        <div className="col-span-1 text-sm space-y-3 ">
          <div className="border border-gray-300 rounded-md px-5 py-3 space-y-5">
            <div className="flex gap-3 text-sm items-center">
              <div className="flex gap-3 text-sm items-center">
                <LocalOffer sx={{ color: orange[500], fontSize: "17px" }} />
              </div>
              <span className="text-gray-800 font-medium text-sm">
                Apply Coupons
              </span>
            </div>
            {true ? (
              <div className="flex justify-between items-center gap-3">
                <TextField
                  onChange={handleChange}
                  id="outlined-basic"
                  placeholder="coupon code"
                  size="small"
                  variant="outlined"
                  className="w-full"
                />
                <Button size="small">Apply</Button>
              </div>
            ) : (
              <div className="flex">
                <div className="p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center">
                  <span className="text-gray-600 font-medium text-sm">
                    COPOON99 Applied
                  </span>
                  <IconButton size="small">
                    <Close className="text-red-600" />
                  </IconButton>
                </div>
              </div>
            )}
          </div>

          <div className="border border-gray-300 rounded-md">
            <PricingCard />
            <div className="p-5">
              <Button
                fullWidth
                variant="contained"
                sx={{ py: "11px" }}
                className="!bg-blue-600 font-display !font-bold"
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


# CartItem.tsx
import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";

const CartItem = () => {
  const handleUpdateQuantity = () => {};

  return (
    <div className="border border-gray-300 rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src="https://threadheads.com/cdn/shop/files/Black-Hoodie-Women-Front_89855c32-488f-4325-ad25-3ed526c3762d.jpg?v=1727759499&width=600"
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">Vintage Sauron Hoodie</h1>
          <p className="text-gray-600 font-medium text-sm">
            The Lord of the Rings
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Sold by: </strong>
            Juan Graphico
          </p>
          <p className="text-sm">7 days replacement available</p>
          <p className="text-sm text-gray-500">
            <strong>Quantity:</strong> 5
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button disabled={true} onClick={handleUpdateQuantity}>
              <Remove />
            </Button>
            <span>{5}</span>
            <Button onClick={handleUpdateQuantity}>
              <Add />
            </Button>
          </div>
        </div>
        <div className="pr-5">
          <p className="text-gray-700 font-medium">₱ 999</p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton>
          <Close color="primary" />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;


# then PricingCard.tsx
import { Divider } from "@mui/material";

const PricingCard = () => {
  return (
    <>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center text-gray-700 font-medium">
          <span>Subtotal</span>
          <span>₱1999</span>
        </div>
        <div className="flex justify-between items-center text-gray-700 font-medium">
          <span>Discount</span>
          <span>₱259</span>
        </div>
        <div className="flex justify-between items-center text-gray-700 font-medium">
          <span>Shipping</span>
          <span>₱99</span>
        </div>
        <div className="flex justify-between items-center text-gray-700 font-medium">
          <span>Platform</span>
          <span className="text-green-700">Free</span>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center text-gray-700 text-[16px] font-extrabold italic font-display p-5">
        <span>Total</span>
        <span>₱1799</span>
      </div>
    </>
  );
};

export default PricingCard;


# then next will be the CHECKOUT PAGE
# intall this 
npm install formik yup
20:15

# in pages/Checkout
# create this files, AddressCard.tsx, AddressForm.tsx, Checkout.tsx

# in AddressCard.tsx
import { Radio } from "@mui/material";

const AddressCard = () => {
  const handleChange = (event: any) => {
    console.log(event.target.checked);
  };

  return (
    <div className="p-5 border rounded-md border-gray-300 flex">
      <div>
        <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button"
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>Sarah Bautista</h1>
        <p className="w-[320px]">Danao Libona, Philippines</p>
        <p>
          <strong>Mobile: </strong> +639123456789
        </p>
      </div>
    </div>
  );
};

export default AddressCard;


# in AddressForm.tsx
import { Box, Button, Grid2, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddressFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
  pinCode: Yup.string()
    .required("Zip code is required")
    .matches(/^[1-9][0-9]{6}$/, "Invalid pin code"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  locality: Yup.string().required("Locality is required"),
});

const AddressForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      pinCode: "",
      address: "",
      city: "",
      state: "",
      locality: "",
    },
    validationSchema: AddressFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box sx={{ mx: "auto" }}>
      <p className="text-xl font-bold text-center pb-5">Contact Details</p>

      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="mobile"
              label="Mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="pinCode"
              label="Zip Code"
              value={formik.values.pinCode}
              onChange={formik.handleChange}
              error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
              helperText={formik.touched.pinCode && formik.errors.pinCode}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="locality"
              label="Locality"
              value={formik.values.locality}
              onChange={formik.handleChange}
              error={formik.touched.locality && Boolean(formik.errors.locality)}
              helperText={formik.touched.locality && formik.errors.locality}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="city"
              label="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="state"
              label="State"
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ py: "14px" }}
              className="!bg-blue-600"
            >
              Add Address
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};

export default AddressForm;


# in Checkout.tsx
import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import AddressCard from "./AddressCard";
import React from "react";
import AddressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";
import { green } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const paymentGatewayList = [
  {
    value: "PAYPAL",
    image:
      "https://imgs.search.brave.com/vcy9r5U7MYLu0idOSB56LMn_o1_KeU7tUIqG-RAb1ac/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E2LzI2/LzVmL2E2MjY1ZmI0/MTIyMTEyNDJjNzJi/OWQyNDEyMzM0NDM1/LmpwZw",
    label: "",
  },
  {
    value: "STRIPE",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRek2EqBo5YIE0TPMVMlIFA594WZZeuqYdAQQ&s",
    label: "",
  },
];

const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paymentGateway, setPaymentGateway] = React.useState("PAYPAL");

  const handlePaymentChange = (event: any) => {
    setPaymentGateway(event.target.value);
  };

  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Select Address</h1>
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>

            <div className="text-xs font-medium space-y-5">
              <p>Saved Addresses</p>
              <div className="space-y-3">
                {[1, 1, 1, 1, 1, 1, 1].map((item) => (
                  <AddressCard />
                ))}
              </div>

              <div className="py-4 px-5 rounded-md border border-gray-300">
                <Button onClick={handleOpen}>Add new Address</Button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="space-y-3 border border-gray-300 p-4 rounded-md">
                <h1 className="text-green-600 font-medium pb-2 text-center">
                  Choose Payment Method
                </h1>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="flex justify-between pr-0 p-5"
                  onChange={handlePaymentChange}
                  value={paymentGateway}
                >
                  {paymentGatewayList.map((item) => (
                    <FormControlLabel
                      className="border border-gray-300 w-[45%] pr-2 rounded-md flex justify-center focus-within:border-green-500"
                      value={item.value}
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />
                      }
                      label={
                        <img
                          className={`${
                            item.value == "stripe" ? "w-14" : ""
                          } object-cover`}
                          src={item.image}
                          alt={item.label}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="border border-gray-300 rounded-md">
              <PricingCard />
              <div className="p-5">
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ py: "11px" }}
                  className="!bg-blue-600 !font-display !font-semibold !capitalize"
                >
                  Pay now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm />
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;

# 21:02

# NOW LETS CREATE THE PROFILE UI

# in pages/Account,
# create this files rafce
Account.tsx
OrderDetails.tsx
OrderItem.tsx
OrderStepper.tsx
UserDetails.tsx

# then in App.tsx import the Account.tsx
      {/* <Checkout /> */}
        <Account />
      </div>
    </ThemeProvider>

# in Account.tsx
import { Divider } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
import UserDetails from "./UserDetails";

const menu = [
  { name: "Profile", path: "/account/profile" },
  { name: "Orders", path: "/account/orders" },
  { name: "Save Cards", path: "/account/save-card" },
  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" },
];

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item: any) => {
    navigate(item.path);
  };

  return (
    <div className="px-5 lg:px-52 min-h-screen mt-10">
      <div>
        <h1 className="text-xl font-bold pb-5">Sarah</h1>
      </div>
      <Divider />

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
        <section className="col-span-1 lg:border-r border-gray-300 lg:pr-5 py-5 h-full">
          {menu.map((item) => (
            <div
              onClick={() => handleClick(item)}
              key={item.name}
              className={`${
                item.path === location.pathname
                  ? "border bg-gray-600 text-white font-display font-bold"
                  : ""
              } py-3 hover:text-white hover:font-bold hover:font-display hover:bg-gray-500 px-5 rounded-md items-center cursor-pointer border-b border-gray-200`}
              //   bg-gradient-to-r from-slate-700 to-slate-800 bg-no-repeat w-full bg-[length:0_3px] hover:bg-[length:170px_3px] bg-left-bottom transition-all duration-500 cursor-pointer h-[70px] px-4 flex
            >
              <p>{item.name}</p>
            </div>
          ))}
        </section>
        <section className="right lg:col-span-2 lg:pl-5 py-5">
          {/* <Orders /> */}
          {/* <OrderDetails /> */}
          <UserDetails />
        </section>
      </div>
    </div>
  );
};

export default Account;


# in OrderDetails.tsx

import { Payments } from "@mui/icons-material";
import { Box, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";

const OrderDetails = () => {
  const navigate = useNavigate();

  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px]"
          src="https://threadheads.com/cdn/shop/files/BlackRinger-Front_bcd247d9-db82-459d-885a-25b4941440f0.jpg?v=1738626159&width=800"
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">Juan Graphico</h1>
          <p>
            This shirt is designed, manufactured and printed by Threadheads.
            Unisex, 90s-inspired relaxed fit with a slight dropped shoulder and
            roomy sleeves. If you're a guy, choose your usual size for a regular
            look or one size up for a more oversized fit. If you're a girl,
            choose your usual unisex t-shirt size for a relaxed fit or go one up
            for oversized. All models (our team members 😎) in photos are
            wearing the Classic Tee.
          </p>
          <p>
            <strong>size: </strong> M
          </p>
        </div>
        <div>
          <Button
            onClick={() => navigate(`/reviews/${5}/create`)}
            className="!bg-orange-500 !text-white !px-4"
          >
            Write Review
          </Button>
        </div>
      </section>

      <section className="border border-gray-300 p-5">
        <OrderStepper orderStatus={"SHIPPED"} />
      </section>
      <div className="border border-gray-300 p-5">
        <h1 className="font-bold pb-3">Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>Sarah Bautista</p>
            <Divider flexItem orientation="vertical" />
            <p>0645984314</p>
          </div>
          <p>London United Kingdom</p>
        </div>
      </div>

      <div className="border border-gray-300 space-y-4">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Total Item Price</p>
            <p>
              You saved{" "}
              <span className="text-green-500 font-medium text-xs">
                ₱699.00{" "}
              </span>
              on this item
            </p>
          </div>

          <p className="font-medium">₱ 799.00</p>
        </div>

        <div className="px-5">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
            <Payments />
            <p>Pay On Delivery</p>
          </div>
        </div>

        <Divider />

        <div className="px-5 pb-5">
          <p className="text-xs">
            <strong>Sort by :</strong>Juan Graphico
          </p>
        </div>

        <div className="p-10">
          <Button
            disabled={false}
            color="error"
            sx={{ py: "0.7rem" }}
            className=""
            variant="outlined"
            fullWidth
          >
            {false ? "Order Canceled" : "Cancel Order"}
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetails;


# in OrderItem.tsx
import { Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border border-gray-300 rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: blue[400] }}>
            <PublishedWithChangesIcon />
          </Avatar>
        </div>

        <div>
          <h1 className="font-bold text-green-600">PENDING</h1>
          <p>Arriving By Mon, 15 Feb</p>
        </div>
      </div>
      <div className="p-5 bg-slate-200 flex gap-3">
        <div>
          <img
            className="w-[70px]"
            src="https://threadheads.com/cdn/shop/files/BlackRinger-Front_bcd247d9-db82-459d-885a-25b4941440f0.jpg?v=1738626159&width=800"
            alt=""
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">Juan Graphico</h1>
          <p>
            This shirt is designed, manufactured and printed by Threadheads.
            Unisex, 90s-inspired relaxed fit with a slight dropped shoulder and
            roomy sleeves. If you're a guy, choose your usual size for a regular
            look or one size up for a more oversized fit. If you're a girl,
            choose your usual unisex t-shirt size for a relaxed fit or go one up
            for oversized. All models (our team members 😎) in photos are
            wearing the Classic Tee.
          </p>
          <p>
            <strong>size: </strong> FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;


# in Orders.tsx
import OrderItem from "./OrderItem";

const Orders = () => {
  return (
    <div className="text-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">All Orders</h1>
        <p>from anytime</p>
      </div>
      <div className="space-y-2">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <OrderItem />
        ))}
      </div>
    </div>
  );
};

export default Orders;


# in OrderStepper.tsx
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const steps = [
  { name: "Order Placed", description: "on Thu, 11 Feb", value: "PLACED" },
  {
    name: "Packed",
    description: "Item Packed in Dispatch Warehouse",
    value: "CONFIRM",
  },
  { name: "Shipped", description: "by Fri, 23 Feb", value: "SHIPPED" },
  { name: "Arriving", description: "by 25 Tue, 28 Feb", value: "ARRIVING" },
  { name: "Arrived", description: "by 25 Tue, 28 Feb", value: "DELIVERED" },
];

const canceledStep = [
  { name: "Order Placed", description: "on Thu, 11 Feb", value: "PLACED" },
  { name: "Order Canceled", description: "on Thu, 11 Feb", value: "CANCELLED" },
];

const currentStep = 2;

const OrderStepper = ({ orderStatus }: any) => {
  const [statusStep, setStatusStep] = useState(steps);

  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setStatusStep(canceledStep);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);

  return (
    <Box className="my-10">
      {statusStep.map((step, index) => (
        <>
          <div className={`flex px-4`} key={index}>
            <div className="flex flex-col items-center">
              <Box
                sx={{ zIndex: -1 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                  index <= currentStep
                    ? "bg-gray-200 text-teal-500"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {step.value === orderStatus ? (
                  <CheckCircleIcon />
                ) : (
                  <FiberManualRecordIcon sx={{ zIndex: -1 }} />
                )}
              </Box>
              {statusStep.length - 1 != index && (
                <div
                  className={`border border-gray-300 h-20 w-[2px] ${
                    index < currentStep
                      ? "bg-teal-500"
                      : "bg-gray-300 text-gray-600"
                  }`}
                ></div>
              )}
            </div>

            <div className={`ml-2 w-full`}>
              <div
                className={`${
                  step.value === orderStatus
                    ? "bg-teal-500 p-2 text-white font-medium rounded-md -translate-y-3"
                    : ""
                } ${
                  orderStatus === "CANCELLED" && step.value === orderStatus
                    ? "bg-red-500"
                    : ""
                } w-full`}
              >
                <p className={``}>{step.name}</p>
                <p
                  className={` ${
                    step.value === orderStatus
                      ? "text-gray-200"
                      : "text-gray-500"
                  } text-sm`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </Box>
  );
};

export default OrderStepper;


# in UserDetails.tsx
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const steps = [
  { name: "Order Placed", description: "on Thu, 11 Feb", value: "PLACED" },
  {
    name: "Packed",
    description: "Item Packed in Dispatch Warehouse",
    value: "CONFIRM",
  },
  { name: "Shipped", description: "by Fri, 23 Feb", value: "SHIPPED" },
  { name: "Arriving", description: "by 25 Tue, 28 Feb", value: "ARRIVING" },
  { name: "Arrived", description: "by 25 Tue, 28 Feb", value: "DELIVERED" },
];

const canceledStep = [
  { name: "Order Placed", description: "on Thu, 11 Feb", value: "PLACED" },
  { name: "Order Canceled", description: "on Thu, 11 Feb", value: "CANCELLED" },
];

const currentStep = 2;

const OrderStepper = ({ orderStatus }: any) => {
  const [statusStep, setStatusStep] = useState(steps);

  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setStatusStep(canceledStep);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);

  return (
    <Box className="my-10">
      {statusStep.map((step, index) => (
        <>
          <div className={`flex px-4`} key={index}>
            <div className="flex flex-col items-center">
              <Box
                sx={{ zIndex: -1 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                  index <= currentStep
                    ? "bg-gray-200 text-teal-500"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {step.value === orderStatus ? (
                  <CheckCircleIcon />
                ) : (
                  <FiberManualRecordIcon sx={{ zIndex: -1 }} />
                )}
              </Box>
              {statusStep.length - 1 != index && (
                <div
                  className={`border border-gray-300 h-20 w-[2px] ${
                    index < currentStep
                      ? "bg-teal-500"
                      : "bg-gray-300 text-gray-600"
                  }`}
                ></div>
              )}
            </div>

            <div className={`ml-2 w-full`}>
              <div
                className={`${
                  step.value === orderStatus
                    ? "bg-teal-500 p-2 text-white font-medium rounded-md -translate-y-3"
                    : ""
                } ${
                  orderStatus === "CANCELLED" && step.value === orderStatus
                    ? "bg-red-500"
                    : ""
                } w-full`}
              >
                <p className={``}>{step.name}</p>
                <p
                  className={` ${
                    step.value === orderStatus
                      ? "text-gray-200"
                      : "text-gray-500"
                  } text-sm`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </Box>
  );
};

export default OrderStepper;


# also create this in src/component/ProfileFieldCard.tsx
import { Divider } from "@mui/material";

const ProfileFieldCard = ({ keys, value }: { keys: string; value: string }) => {
  return (
    <div className="p-5 flex items-center bg-slate-50">
      <p className="w-20 lg:w-36 pr-5">{keys}</p>
      <Divider orientation="vertical" flexItem />
      <p className="pl-4 lg:pl-10 font-semibold lg:text-lg">{value}</p>
    </div>
  );
};

export default ProfileFieldCard;


# add file in Account folder, Address.tsx
import UserAddressCard from "./UserAddressCard";

const Address = () => {
  return (
    <div className="space-y-3">
      {[1, 1, 1, 1, 1].map((item) => (
        <UserAddressCard />
      ))}
    </div>
  );
};

export default Address;


# Account/UserAddressCard.tsx
const UserAddressCard = () => {
  return (
    <div className="p-5 border rounded-md border-gray-300 flex">
      <div className="space-y-3">
        <h1>Sarah Bautista</h1>
        <p className="w-[320px]">Danao Libona, Philippines</p>
        <p>
          <strong>Mobile: </strong> +639123456789
        </p>
      </div>
    </div>
  );
};

export default UserAddressCard;


# then import in Account.tsx
<section className="right lg:col-span-2 lg:pl-5 py-5">
          {/* <Orders /> */}
          {/* <OrderDetails /> */}
          {/* <UserDetails /> */}
          <Address />
        </section>
      </div>
    </div>
  );
};

export default Account;


# NOW LETS IMPLEMENT THE ROUTES

# in App.tsx
import { ThemeProvider } from "@mui/material";
import Navbar from "./customer/components/Navbar/Navbar";
import customTheme from "./Theme/customTheme";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";
import ProductDetails from "./customer/pages/ProductDetails/ProductDetails";
import Review from "./customer/pages/Review/Review";
import Cart from "./customer/pages/Cart/Cart";
import Checkout from "./customer/pages/Checkout/Checkout";
import Account from "./customer/pages/Account/Account";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/*" element={<Account />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;


# in Account.tsx implement the nested routes

 <p>{item.name}</p>
            </div>
          ))}
        </section>
        <section className="right lg:col-span-2 lg:pl-5 py-5">
          <Routes>
            <Route path="/" element={<UserDetails />} />
            <Route path="/orders" element={<Orders />} />
            <Route
              path="/order/:orderId/:orderItemId"
              element={<OrderDetails />}
            />
            <Route path="/addresses" element={<Address />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default Account;


# in Navbar.tsx
const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const navigate = useNavigate();

------------------------------------------------------------------

<h1
                onClick={() => navigate("/")}
                className="logo text-primary cursor-pointer text-lg md:text-2xl font-display"
              >
                Juan Graphico
              </h1>

-----------------------------------------------------------

{true ? (
              <Button
                onClick={() => navigate("/account/orders")}
                className="flex items-center gap-2"
              >
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://imgs.search.brave.com/0T82UtGZ1MJKNUs52cZ1xwH-vaXD2OELuZMouLFaxjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1jZG4uaHlwYi5z/dC9odHRwczovL2h5/cGViZWFzdC5jb20v/aW1hZ2UvMjAyNC8x/Mi8yMy9rYWlqdS1u/by04LXNlYXNvbi0y/LWFuaW1lLTIwMjUt/c3VtbWVyLXByZW1p/ZXJlLWluZm8tMDAw/LmpwZz9maXQ9bWF4/JmNicj0xJnE9OTAm/dz03NTAmaD01MDA"
                />
                <h1 className="font-semibold hidden lg:block !text-primary">
                  Marcko
                </h1>
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}
            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton onClick={() => navigate("/cart")}>
              <LocalMallIcon className="text-primary" sx={{ fontSize: 29 }} />
            </IconButton>


# in Cart.tsx

<PricingCard />
            <div className="p-5">
              <Button
                onClick={() => navigate("/checkout")}
                fullWidth
                variant="contained"
                sx={{ py: "11px" }}
                className="!bg-blue-600 !font-display !font-bold !capitalize"
              >
                Buy now
              </Button>


# in CategorySheet.tsx
<ul className="space-y-3">
              {childCategory(
                categoryThree[selectedCategory],
                item.categoryId
              ).map((item: any) => (
                <div>
                  <li
                    onClick={() => navigate("/products/" + item.categoryId)}
                    className="hover:text-primary cursor-pointer"
                  >
                    {item.name}
                  </li>
                </div>
              ))}
            </ul>




# GSTIN 22:22
# NEXT LETS IMPLEMENT THE BECOME SELLER FORM UI AND FUNCTINALITY

# in pages/Become Seller create this files
BecomeSeller.tsx
BecomeSellerFormStep1.tsx
BecomeSellerFormStep2.tsx
BecomeSellerFormStep3.tsx
BecomeSellerFormStep4.tsx
SellerAccountForm.tsx
SellerLoginForm.tsx

# in BecomeSeller.tsx
import { useState } from "react";
import SellerAccountForm from "./SellerAccountForm";
import SellerLoginForm from "./SellerLoginForm";
import { Button } from "@mui/material";

const BecomeSeller = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleShowPage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="grid md:gap-10 grid-cols-3 min-h-screen">
      <section className="lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md">
        {isLogin ? <SellerAccountForm /> : <SellerLoginForm />}

        <div className="mt-10 space-y-2">
          <h1 className="text-center text-sm font-medium">have an account?</h1>
          <Button
            onClick={handleShowPage}
            fullWidth
            sx={{ py: "11px" }}
            variant="outlined"
          >
            {isLogin ? "Register" : "Login"}
          </Button>
        </div>
      </section>
      <section className="hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center">
        <div className="lg:w-[70%] px-5 space-y-10">
          <div className="space-y-2 font-bold text-center">
            <p className="text-2xl">Join Juan Graphico Now!</p>
            <p className="text-lg text-teal-600">Boost your sales today</p>
          </div>
          <img
            src="https://threadheads.com/cdn/shop/files/Collection_Tracksuits.jpg?v=1738552487&width=800"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default BecomeSeller;


# in BecomeSellerFormStep1.tsx

import { Box, TextField } from "@mui/material";

const BecomeSellerFormStep1 = ({ formik }: any) => {
  return (
    <Box>
      <p className="text-xl font-bold text-center pb-9">Contact Details</p>
      <div className="space-y-9">
        <TextField
          fullWidth
          className="!pb-5"
          name="mobile"
          label="Mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />
        <TextField
          fullWidth
          name="GSTIN"
          label="GSTIN"
          value={formik.values.GSTIN}
          onChange={formik.handleChange}
          error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
          helperText={formik.touched.GSTIN && formik.errors.GSTIN}
        />
      </div>
    </Box>
  );
};

export default BecomeSellerFormStep1;


# in BecomeSellerFormStep2.tsx

import { Box, Grid2, TextField } from "@mui/material";

const BecomeSellerFormStep2 = ({ formik }: any) => {
  return (
    <Box>
      <>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="mobile"
              label="Mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="pinCode"
              label="Zip Code"
              value={formik.values.pinCode}
              onChange={formik.handleChange}
              error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
              helperText={formik.touched.pinCode && formik.errors.pinCode}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="locality"
              label="Locality"
              value={formik.values.locality}
              onChange={formik.handleChange}
              error={formik.touched.locality && Boolean(formik.errors.locality)}
              helperText={formik.touched.locality && formik.errors.locality}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="city"
              label="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="state"
              label="State"
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid2>
        </Grid2>
      </>
    </Box>
  );
};

export default BecomeSellerFormStep2;



# BecomeSellerFormStep3.tsx

import { TextField } from "@mui/material";
import React from "react";

interface BecomeSellerFormStep2Props {
  formik: any;
}

const BecomeSellerFormStep3: React.FC<BecomeSellerFormStep2Props> = ({
  formik,
}) => {
  return (
    <div className="space-y-5">
      <TextField
        fullWidth
        className="!pb-5"
        name="bankDetails.accountNumber"
        label="Account Number"
        value={formik.values.bankDetails.accountNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.bankDetails?.accountNumber &&
          Boolean(formik.errors.bankDetails?.accountNumber)
        }
        helperText={
          formik.touched.bankDetails?.accountNumber &&
          formik.errors.bankDetails?.accountNumber
        }
      />
      <TextField
        fullWidth
        className="!pb-5"
        name="bankDetails.ifscCode"
        label="IFSC Code"
        value={formik.values.bankDetails.ifscCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.bankDetails?.ifscCode &&
          Boolean(formik.errors.bankDetails?.ifscCode)
        }
        helperText={
          formik.touched.bankDetails?.ifscCode &&
          formik.errors.bankDetails?.ifscCode
        }
      />
      <TextField
        fullWidth
        name="bankDetails.accountHolderName"
        label="Account Holder Name"
        value={formik.values.bankDetails.accountHolderName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.bankDetails?.accountHolderName &&
          Boolean(formik.errors.bankDetails?.accountHolderName)
        }
        helperText={
          formik.touched.bankDetails?.accountHolderName &&
          formik.errors.bankDetails?.accountHolderName
        }
      />
    </div>
  );
};

export default BecomeSellerFormStep3;


# BecomeSellerFormStep4.tsx

import { TextField } from "@mui/material";

interface BecomeSellerFormStep2Props {
  formik: any;
}

const BecomeSellerFormStep4 = ({ formik }: BecomeSellerFormStep2Props) => {
  return (
    <div className="space-y-5">
      <TextField
        fullWidth
        className="!pb-5"
        name="businessDetails.businessName"
        label="Business Name"
        value={formik.values.businessDetails.businessName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched?.businessDetails?.businessName &&
          Boolean(formik.errors?.businessDetails?.businessName)
        }
        helperText={
          formik.touched?.businessDetails?.businessName &&
          formik.errors?.businessDetails?.businessName
        }
      />
      <TextField
        fullWidth
        className="!pb-5"
        name="sellerName"
        label="Seller Name"
        value={formik.values.sellerName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
        helperText={formik.touched.sellerName && formik.errors.sellerName}
      />
      <TextField
        fullWidth
        className="!pb-5"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched?.password && Boolean(formik.errors?.password)}
        helperText={formik.touched?.password && formik.errors?.password}
      />
    </div>
  );
};

export default BecomeSellerFormStep4;


# then import it to SellerAccountForm.tsx

import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import BecomeSellerFormStep1 from "./BecomeSellerFormStep1";
import BecomeSellerFormStep2 from "./BecomeSellerFormStep2";
import BecomeSellerFormStep3 from "./BecomeSellerFormStep3";
import BecomeSellerFormStep4 from "./BecomeSellerFormStep4";

const steps = [
  "Tax Details & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details",
];

const SellerAccountForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (value: number) => () => {
    (activeStep < steps.length - 1 || (activeStep > 0 && value == -1)) &&
      setActiveStep(activeStep + value);
    activeStep == steps.length - 1 && handleCreateAccount();
  };

  const handleCreateAccount = () => {
    console.log("create account");
  };

  const formik = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      gstin: "",
      pickupAddress: {
        name: "",
        mobile: "",
        pincode: "",
        address: "",
        locality: "",
        city: "",
        state: "",
      },
      bankDetails: {
        accountNumber: "",
        ifscCode: "",
        accountHolderName: "",
      },
      sellerName: "",
      email: "",
      businessDetails: {
        businessName: "",
        businessEmail: "",
        businessMobile: "",
        logo: "",
        banner: "",
        businessAddress: "",
      },
      password: "",
    },
    onSubmit: (values) => {
      console.log(values, "formik submitted");
    },
  });

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <section className="mt-20 space-y-10">
        <div>
          {activeStep == 0 ? (
            <BecomeSellerFormStep1 formik={formik} />
          ) : activeStep == 1 ? (
            <BecomeSellerFormStep2 formik={formik} />
          ) : activeStep == 2 ? (
            <BecomeSellerFormStep3 formik={formik} />
          ) : (
            <BecomeSellerFormStep4 formik={formik} />
          )}
        </div>

        <div className="flex items-center justify-between">
          <Button
            onClick={handleStep(-1)}
            variant="contained"
            disabled={activeStep == 0}
          >
            Back
          </Button>

          <Button onClick={handleStep(1)} variant="contained">
            {activeStep == steps.length - 1 ? "Create Account" : "Continue"}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SellerAccountForm;


# NEXT WELL BE THE LOGIN FORM
22:35

# in SellerLoginForm.tsx
import { TextField } from "@mui/material";
import { useFormik } from "formik";

const SellerLoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
    },
  });

  return (
    <div>
      <h1 className="text-center font-bold text-xl pb-5 text-teal-600">
        Login As Seller
      </h1>
      <div className="space-y-5">
        <TextField
          fullWidth
          className="!pb-5"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {true && (
          <div className="space-y-2">
            <p className="font-medium text-sm opacity-50">
              Enter OTP sent to your email
            </p>
            <TextField
              fullWidth
              className="!pb-5"
              name="otp"
              label="Otp"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerLoginForm;


# NEXT LETS CREATE THE SELLER PANEL DASHBOARD

# in src/seller/components/SellerDrawerList
# inside of it SellerDrawerList.tsx
import {
  AccountBalanceWallet,
  AccountBox,
  Dashboard,
  Inventory,
  Logout,
  Receipt,
  ShoppingBag,
} from "@mui/icons-material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import DrawerList from "../../../component/DrawerList";

const menu = [
  {
    name: "Dashboard",
    path: "/seller",
    icon: <Dashboard className="text-[#acb2c4]" />,
    activeIcon: <Dashboard className="text-white" />,
  },
  {
    name: "Orders",
    path: "/seller/orders",
    icon: <ShoppingBag className="text-[#acb2c4]" />,
    activeIcon: <ShoppingBag className="text-white" />,
  },
  {
    name: "Products",
    path: "/seller/products",
    icon: <Inventory className="text-[#acb2c4]" />,
    activeIcon: <Inventory className="text-white" />,
  },
  {
    name: "Add Product",
    path: "/seller/add-product",
    icon: <LibraryAddIcon className="text-[#acb2c4]" />,
    activeIcon: <LibraryAddIcon className="text-white" />,
  },
  {
    name: "Payment",
    path: "/seller/payment",
    icon: <AccountBalanceWallet className="text-[#acb2c4]" />,
    activeIcon: <AccountBalanceWallet className="text-white" />,
  },
  {
    name: "Transaction",
    path: "/seller/transaction",
    icon: <Receipt className="text-[#acb2c4]" />,
    activeIcon: <Receipt className="text-white" />,
  },
];

const menu2 = [
  {
    name: "Account",
    path: "/seller/account",
    icon: <AccountBox className="text-[#acb2c4]" />,
    activeIcon: <AccountBox className="text-white" />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <Logout className="text-[#acb2c4]" />,
    activeIcon: <Logout className="text-white" />,
  },
];

const SellerDrawerList = ({ toggleDrawer }: { toggleDrawer: any }) => {
  return <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />;
};

export default SellerDrawerList;




# then another file in seller/pages/
# inside of it SellerDashboard.tsx
import SellerDrawerList from "../../components/SellerDrawerList/SellerDrawerList";

const SellerDashboard = () => {
  const toggleDrawer = () => {};

  return (
    <div>
      <div className="lg:flex lg:h-[90vh]">
        <section className="hidden lg:block h-full bg-[#4C5E9A]">
          <SellerDrawerList toggleDrawer={toggleDrawer} />
        </section>

        <section className="p-10 w-full lg:w-[80%] overflow-auto">
          Seller Routes
        </section>
      </div>
    </div>
  );
};

export default SellerDashboard;



# import the new component in App.tsx
<Route path="/account/*" element={<Account />} />
          <Route path="/seller/*" element={<SellerDashboard />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;


# then in src/component/DraweList.tsx
import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

interface menuItem {
  name: string;
  path: string;
  icon: any;
  activeIcon: any;
}

interface DrawerListProp {
  menu: menuItem[];
  menu2: menuItem[];
  toggleDrawer: () => void;
}

const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProp) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[300px] border-r border-gray-200 py-5">
        <div className="space-y-2">
          {menu.map((item, index: number) => (
            <div
              onClick={() => navigate(item.path)}
              className="px-4 cursor-pointer"
              key={index}
            >
              <p
                className={`${
                  item.path == location.pathname
                    ? "bg-[#7a8ac0] text-white"
                    : "text-[#acb2c4]"
                } flex items-center px-5 py-3 w-full rounded-md`}
              >
                <ListItemIcon>
                  {item.path == location.pathname ? item.activeIcon : item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </p>
            </div>
          ))}
        </div>
        <Divider variant="middle" className="bg-[#7a8ac0]" />
        <div className="space-y-2">
          {menu2.map((item, index: number) => (
            <div
              onClick={() => navigate(item.path)}
              className="px-4 cursor-pointer"
              key={index}
            >
              <p
                className={`${
                  item.path == location.pathname
                    ? "bg-[#7a8ac0] text-white"
                    : "text-[#acb2c4]"
                } flex items-center px-5 py-3 w-full rounded-md`}
              >
                <ListItemIcon>
                  {item.path == location.pathname ? item.activeIcon : item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrawerList;


# THEN LETS CREATE THE ROUTES OF EVERY PAGES AND CREATE THE UI OF IT

# in src/seller/pages/Account
# create this file Profile.tsx
import React from "react";

const Profile = () => {
  return <div>Profile</div>;
};

export default Profile;


# in src/seller/pages/Orders/Orders.tsx
import React from "react";

const Orders = () => {
  return <div>Orders</div>;
};

export default Orders;


# in src/seller/pages/Orders/OrderTable.tsx

import React from "react";

const OrderTable = () => {
  return <div>OrderTable</div>;
};

export default OrderTable;



# in src/seller/pages/Payment/Payment.tsx
import React from "react";

const Payment = () => {
  return <div>Payment</div>;
};

export default Payment;


# in src/seller/pages/Payment/Transaction.tsx
import React from "react";

const Transaction = () => {
  return <div>Transaction</div>;
};

export default Transaction;


# in src/seller/pages/Products/AddProduct.tsx
import React from "react";

const AddProduct = () => {
  return <div>AddProduct</div>;
};

export default AddProduct;


# in src/seller/pages/Products/Products.tsx
import React from "react";

const Products = () => {
  return <div>Products</div>;
};

export default Products;


# in src/seller/pages/SellerDashboard/Dashboard.tsx
import React from "react";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

export default Dashboard;


# then create this in src/Routes/SellerRoutes.tsx

import { Route, Routes } from "react-router-dom";
import Dashboard from "../seller/pages/SellerDashboard/Dashboard";
import Products from "../seller/pages/Products/Products";
import AddProduct from "../seller/pages/Products/AddProduct";
import Orders from "../seller/pages/Orders/Orders";
import Profile from "../seller/pages/Account/Profile";
import Payment from "../seller/pages/Payment/Payment";
import Transaction from "../seller/pages/Payment/Transaction";

const SellerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
};

export default SellerRoutes;


# then import it to the src/seller/pages/SellerDashboard/SellerDashboard.tsx
import SellerRoutes from "../../../Routes/SellerRoutes";
import SellerDrawerList from "../../components/SellerDrawerList/SellerDrawerList";

const SellerDashboard = () => {
  const toggleDrawer = () => {};

  return (
    <div>
      <div className="lg:flex lg:h-[90vh]">
        <section className="hidden lg:block h-full bg-[#4C5E9A]">
          <SellerDrawerList toggleDrawer={toggleDrawer} />
        </section>

        <section className="p-10 w-full lg:w-[80%] overflow-auto">
          <SellerRoutes />
        </section>
      </div>
    </div>
  );
};

export default SellerDashboard;


# THEN 1 BY 1 WELL CREATE THE UI OF EACH PAGES
# FIRST OrderTable.tsx
# src/seller/pages/Orders/OrderTable.tsx

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function OrderTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order Id</StyledTableCell>
            <StyledTableCell>Products</StyledTableCell>
            <StyledTableCell align="right">Shipping Address</StyledTableCell>
            <StyledTableCell align="right">Order Status</StyledTableCell>
            <StyledTableCell align="right">Update Order</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

# then import it to Orders.tsx
# src/seller/pages/Orders/Orders.tsx
import OrderTable from "./OrderTable";

const Orders = () => {
  return (
    <div>
      <h1 className="font-bold mb-5 text-xl text-gray-500 font-display italic">
        All Orders
      </h1>
      <OrderTable />
    </div>
  );
};

export default Orders;


# in Products.tsx
# create the ProductTable.tsx
# src/seller/pages/Products/ProductTable.tsx
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ProductTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Images</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">MRP</StyledTableCell>
            <StyledTableCell align="right">Selling Price</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
            <StyledTableCell align="right">Update Stock</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



# then import
# src/seller/pages/Products/Products.tsx
import ProductTable from "./ProductTable";

const Products = () => {
  return (
    <div>
      <h1 className="font-bold mb-5 text-xl text-gray-500 font-display italic">
        Products
      </h1>
      <ProductTable />
    </div>
  );
};

export default Products;


# then in Transaction.tsx
# src/seller/pages/Payment/Transaction.tsx

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TransactionTable() {
  return (
    <>
      <h1 className="font-bold mb-5 text-xl text-gray-500 font-display italic">
        Our Transactions
      </h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell align="right">Customer Details</StyledTableCell>
              <StyledTableCell align="right">Order</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

# also in Payment.tsx
# src/seller/pages/Payment/Payment.tsx
import { Button, Card, Divider } from "@mui/material";
import TransactionTable from "./Transaction";

const Payment = () => {
  return (
    <div className="space-y-5">
      <Card className="rounded-md space-y-4 p-5">
        <h1 className="text-gray-600 font-medium">Total Earnings</h1>
        <h1 className="font-bold text-xl pb-1">₱ 99999</h1>
        <Divider />
        <p className="text-gray-600 font-medium pt-1">
          Last Payment: <strong>₱ 0.00</strong>
        </p>
      </Card>
      <div className="pt-20 space-y-3">
        <Button variant="contained">Transaction</Button>
      </div>
      <TransactionTable />
    </div>
  );
};

export default Payment;


# THEN NEXT WELL BE THE ADD PRODUCT PAGE
# we need to go to cloudinary website


# go to your acc in cloudinary, create +Add Upload Preset
=> Unsigned
# then get cloud name, upload preset name

# then in src/Util/uploadToCloudinary.tsx
export const uploadToCloudinary = async (pics: any) => {
  const cloud_name = "dnx6nbe9j";
  const upload_preset = "juan-graphico";

  if (pics) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dnx6nbe9j/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const fileDate = await res.json();
    return fileDate.url;
  } else {
    console.log("error : pics not found");
  }
};


# then create the UI and functionality in AddProduct.tsx in 
# src/seller/pages/Products/AddProduct.tsx

import { AddPhotoAlternate, Close } from "@mui/icons-material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid2,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { uploadToCloudinary } from "../../../Util/uploadToCloudinary";
import { colors } from "../../../data/Filter/color";
import { electronicsLevelThree } from "../../../data/category/level three/electronicsLevelThree";
import { furnitureLevelThree } from "../../../data/category/level three/furnitureLevelThree";
import { menLevelThree } from "../../../data/category/level three/menLevelThree";
import { womenLevelThree } from "../../../data/category/level three/womenLevelThree";
import { electronicsLevelTwo } from "../../../data/category/level two/electrnicsLevelTwo";
import { furnitureLevelTwo } from "../../../data/category/level two/furnitureLevelTwo";
import { menLevelTwo } from "../../../data/category/level two/menLevelTwo";
import { womenLevelTwo } from "../../../data/category/level two/womenLevelTwo";
import { mainCategory } from "../../../data/category/mainCategory";

const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  kids: [],
  home_furniture: furnitureLevelTwo,
  beauty: [],
  electronics: electronicsLevelTwo,
};

const categoryThree: { [key: string]: any[] } = {
  men: menLevelThree,
  women: womenLevelThree,
  kids: [],
  home_furniture: furnitureLevelThree,
  beauty: [],
  electronics: electronicsLevelThree,
};

const AddProduct = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const [snackbarOpen, setSnackBarOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mrpPrice: "",
      sellingPrice: "",
      quantity: "",
      color: "",
      images: [],
      category: "",
      category2: "",
      category3: "",
      sizes: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    setUploadImage(true);
    const image = await uploadToCloudinary(file);

    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter((child: any) => {
      return child.parentCategoryId == parentCategoryId;
    });
  };

  const handleCloseSnackBar = () => {
    setSnackBarOpen(false);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
        <Grid2 container spacing={2}>
          <Grid2 className="flex flex-wrap gap-5" size={{ xs: 12 }}>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label className="relative" htmlFor="fileInput">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                <AddPhotoAlternateIcon className="text-gray-700" />
              </span>
              {uploadImage && (
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                  <CircularProgress className="!text-gray-700" />
                </div>
              )}
            </label>

            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image, index) => (
                <div className="relative">
                  <img
                    className="w-24 h-24 object-cover"
                    key={index}
                    src={image}
                    alt={`ProductImage ${index + 1}`}
                  />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    className=""
                    size="small"
                    color="error"
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      outline: "none",
                    }}
                  >
                    <Close sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              //   className="!pb-5"
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              required
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              multiline
              rows={4}
              fullWidth
              className="!pb-5"
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              required
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              //   className="!pb-5"
              id="mrp_price"
              name="mrpPrice"
              label="MRP Price"
              type="number"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
              helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
              required
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              //   className="!pb-5"
              id="sellingPrice"
              name="sellingPrice"
              label="Selling Price"
              type="number"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.sellingPrice &&
                Boolean(formik.errors.sellingPrice)
              }
              helperText={
                formik.touched.sellingPrice && formik.errors.sellingPrice
              }
              required
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.color && Boolean(formik.errors.color)}
              required
            >
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                name="color"
                value={formik.values.color}
                onChange={formik.handleChange}
                label="Color"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {colors.map((color, index) => (
                  <MenuItem value={color.name}>
                    <div className="flex gap-3">
                      <span
                        style={{ backgroundColor: color.hex }}
                        className={`h-5 w-5 rounded-full ${
                          color.name === "White" ? "border" : ""
                        }`}
                      ></span>
                      <p>{color.name}</p>
                    </div>
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.color && formik.errors.color && (
                <FormHelperText>{formik.errors.color}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.sizes && Boolean(formik.errors.sizes)}
              required
            >
              <InputLabel id="sizes-label">Sizes</InputLabel>
              <Select
                labelId="sizes-label"
                id="sizes"
                name="sizes"
                value={formik.values.sizes}
                onChange={formik.handleChange}
                label="Sizes"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="FREE">FREE</MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
              </Select>
              {formik.touched.sizes && formik.errors.sizes && (
                <FormHelperText>{formik.errors.sizes}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                label="Category"
              >
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                {mainCategory.map((item) => (
                  <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category2-label">Second Category</InputLabel>
              <Select
                labelId="category2-label"
                id="category2"
                name="categor2"
                value={formik.values.category2}
                onChange={formik.handleChange}
                label="Second Category"
              >
                {formik.values.category &&
                  categoryTwo[formik.values.category]?.map((item) => (
                    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                  ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category-label">Third Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="categor3"
                value={formik.values.category3}
                onChange={formik.handleChange}
                label="Third Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {formik.values.category2 &&
                  childCategory(
                    categoryThree[formik.values.category],
                    formik.values.category2
                  )?.map((item: any) => (
                    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                  ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <Button
              sx={{ p: "14px" }}
              className="!bg-gray-800"
              variant="contained"
              fullWidth
              type="submit"
            >
              {false ? (
                <CircularProgress
                  size="small"
                  sx={{ width: "27px", height: "27px" }}
                />
              ) : (
                "Add Product"
              )}
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </div>
  );
};

export default AddProduct;


# NEXT WELL CREATE THE ADMIN PANEL UI AND FUNCTIONALITY

# first create src/admin/components/AdminDrawerList.tsx
import {
  AccountBox,
  Add,
  Category,
  Dashboard,
  ElectricBolt,
  IntegrationInstructions,
  LocalOffer,
  Logout,
} from "@mui/icons-material";
import DrawerList from "../../component/DrawerList";

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <Dashboard className="text-[#acb2c4]" />,
    activeIcon: <Dashboard className="text-white" />,
  },
  {
    name: "Coupons",
    path: "/admin/coupon",
    icon: <IntegrationInstructions className="text-[#acb2c4]" />,
    activeIcon: <IntegrationInstructions className="text-white" />,
  },
  {
    name: "Add New Coupon",
    path: "/admin/add-coupon",
    icon: <Add className="text-[#acb2c4]" />,
    activeIcon: <Add className="text-white" />,
  },
  {
    name: "Electronics Category",
    path: "/admin/electronics-category",
    icon: <ElectricBolt className="text-[#acb2c4]" />,
    activeIcon: <ElectricBolt className="text-white" />,
  },
  {
    name: "Shop By Category",
    path: "/admin/shop-by-category",
    icon: <Category className="text-[#acb2c4]" />,
    activeIcon: <Category className="text-white" />,
  },
  {
    name: "Deals",
    path: "/admin/deals",
    icon: <LocalOffer className="text-[#acb2c4]" />,
    activeIcon: <LocalOffer className="text-white" />,
  },
];

const menu2 = [
  {
    name: "Account",
    path: "/seller/account",
    icon: <AccountBox className="text-[#acb2c4]" />,
    activeIcon: <AccountBox className="text-white" />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <Logout className="text-[#acb2c4]" />,
    activeIcon: <Logout className="text-white" />,
  },
];

const AdminDrawerList = ({ toggleDrawer }: any) => {
  return <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />;
};

export default AdminDrawerList;


# in src/admin/pages/Coupon/AddNewCouponForm.tsx
const AddNewCouponForm = () => {
  return <div>AddNewCouponForm</div>;
};

export default AddNewCouponForm;


# in src/admin/pages/Coupon/Coupon.tsx
const Coupon = () => {
  return <div>Coupon</div>;
};

export default Coupon;


# in src/admin/pages/Dashboard/AdminDashboard.tsx
import AdminRoutes from "../../../Routes/AdminRoutes";
import AdminDrawerList from "../../components/AdminDrawerList";

const AdminDashboard = () => {
  const toggleDrawer = () => {};

  return (
    <div>
      <div className="lg:flex lg:h-[90vh]">
        <section className="hidden lg:block h-full bg-[#4C5E9A]">
          <AdminDrawerList toggleDrawer={toggleDrawer} />
        </section>

        <section className="p-10 w-full lg:w-[80%] overflow-auto">
          <AdminRoutes />
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;


# in src/admin/pages/HomePage/Deal.tsx
const Deal = () => {
  return <div>Deal</div>;
};

export default Deal;


# in src/admin/pages/HomePage/ElectronicTable.tsx
const ElectronicTable = () => {
  return <div>ElectronicTable</div>;
};

export default ElectronicTable;


# in src/admin/pages/HomePage/GridTable.tsx
const GridTable = () => {
  return <div>GridTable</div>;
};

export default GridTable;


# in src/admin/pages/HomePage/ShopByCategoryTable.tsx
const ShopByCategoryTable = () => {
  return <div>ShopByCategoryTable</div>;
};

export default ShopByCategoryTable;


# in src/admin/pages/Sellers/SellersTable.tsx
const SellersTable = () => {
  return <div>SellersTable</div>;
};

export default SellersTable;


# then import the new components in src/Routes/AdminRoutes.tsx

import { Route, Routes } from "react-router-dom";
import SellersTable from "../admin/pages/Sellers/SellersTable";
import Coupon from "../admin/pages/Coupon/Coupon";
import AddNewCouponForm from "../admin/pages/Coupon/AddNewCouponForm";
import GridTable from "../admin/pages/HomePage/GridTable";
import ElectronicTable from "../admin/pages/HomePage/ElectronicTable";
import ShopByCategoryTable from "../admin/pages/HomePage/ShopByCategoryTable";
import Deal from "../admin/pages/HomePage/Deal";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SellersTable />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/add-coupon" element={<AddNewCouponForm />} />
        <Route path="/home-grid" element={<GridTable />} />
        <Route path="/electronics-category" element={<ElectronicTable />} />
        <Route path="/shop-by-category" element={<ShopByCategoryTable />} />
        <Route path="/deals" element={<Deal />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;

# 1:00:35

# in src/admin/pages/Sellers/SellersTable.tsx
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

const statusAccount = [
  {
    status: "PENDING_VERIFICATION",
    title: "Pending Verification",
    description: "Account is pending verification.",
  },
  {
    status: "ACTIVE",
    title: "Active",
    description: "Account is active and in good standing.",
  },
  {
    status: "SUSPENDED",
    title: "Suspended",
    description:
      "Account is temporarily suspended due to policy violations or user request.",
  },
  {
    status: "DEACTIVATED",
    title: "Deactivated",
    description: "Account is deactivated and no longer accessible by the user.",
  },
  {
    status: "BANNED",
    title: "Banned",
    description: "Account is permanently banned due to severe violations.",
  },
  {
    status: "CLOSED",
    title: "Closed",
    description: "Account is permanently closed, preventing future access.",
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const SellersTable = () => {
  const [accountStatus, setAccountStatus] = useState("ACTIVE");

  const handleChange = (event: any) => {
    setAccountStatus(event.target.value);
  };

  return (
    <>
      <div className="pb-5 w-60 ">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" style={{ zIndex: 100 }}>
            Account Status
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={accountStatus}
            label="Account Status"
            onChange={handleChange}
          >
            {statusAccount.map((item) => (
              <MenuItem key={item.status} value={item.status}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Seller Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell align="right">Mobile</StyledTableCell>
              <StyledTableCell align="right">GSTIN</StyledTableCell>
              <StyledTableCell align="right">Business Name</StyledTableCell>
              <StyledTableCell align="right">Account Status</StyledTableCell>
              <StyledTableCell align="right">Change Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button>Change</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SellersTable;


# in src/admin/pages/Coupon/Coupon.tsx
import { Delete } from "@mui/icons-material";
import {
  Button,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

const statusAccount = [
  {
    status: "PENDING_VERIFICATION",
    title: "Pending Verification",
    description: "Account is pending verification.",
  },
  {
    status: "ACTIVE",
    title: "Active",
    description: "Account is active and in good standing.",
  },
  {
    status: "SUSPENDED",
    title: "Suspended",
    description:
      "Account is temporarily suspended due to policy violations or user request.",
  },
  {
    status: "DEACTIVATED",
    title: "Deactivated",
    description: "Account is deactivated and no longer accessible by the user.",
  },
  {
    status: "BANNED",
    title: "Banned",
    description: "Account is permanently banned due to severe violations.",
  },
  {
    status: "CLOSED",
    title: "Closed",
    description: "Account is permanently closed, preventing future access.",
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Coupon = () => {
  const [accountStatus, setAccountStatus] = useState("ACTIVE");

  const handleChange = (event: any) => {
    setAccountStatus(event.target.value);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Coupon Code</StyledTableCell>
              <StyledTableCell>Start Date</StyledTableCell>
              <StyledTableCell align="right">End Date</StyledTableCell>
              <StyledTableCell align="right">
                Minimum Order Value
              </StyledTableCell>
              <StyledTableCell align="right">Discount</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button>
                    <Delete />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Coupon;


# LETS GOTO ADD NEW COUPON
# npm i dayjs
# npm install @mui/x-date-pickers
# 1:00:51

# in src/admin/pages/Coupon/Coupon.tsx

import { Delete } from "@mui/icons-material";
import {
  Button,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

const statusAccount = [
  {
    status: "PENDING_VERIFICATION",
    title: "Pending Verification",
    description: "Account is pending verification.",
  },
  {
    status: "ACTIVE",
    title: "Active",
    description: "Account is active and in good standing.",
  },
  {
    status: "SUSPENDED",
    title: "Suspended",
    description:
      "Account is temporarily suspended due to policy violations or user request.",
  },
  {
    status: "DEACTIVATED",
    title: "Deactivated",
    description: "Account is deactivated and no longer accessible by the user.",
  },
  {
    status: "BANNED",
    title: "Banned",
    description: "Account is permanently banned due to severe violations.",
  },
  {
    status: "CLOSED",
    title: "Closed",
    description: "Account is permanently closed, preventing future access.",
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Coupon = () => {
  const [accountStatus, setAccountStatus] = useState("ACTIVE");

  const handleChange = (event: any) => {
    setAccountStatus(event.target.value);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Coupon Code</StyledTableCell>
              <StyledTableCell>Start Date</StyledTableCell>
              <StyledTableCell align="right">End Date</StyledTableCell>
              <StyledTableCell align="right">
                Minimum Order Value
              </StyledTableCell>
              <StyledTableCell align="right">Discount</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button>
                    <Delete />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Coupon;


# then in src/admin/pages/Coupon/AddNewCouponForm.tsx

import { useFormik } from "formik";
import { Dayjs } from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Button, Grid2, TextField } from "@mui/material";

interface CouponFormValues {
  code: string;
  discountPercentage: number;
  validityStartDate: Dayjs | null;
  validityEndDate: Dayjs | null;
  minimumOrderValue: number;
}

const AddNewCouponForm = () => {
  const formik = useFormik<CouponFormValues>({
    initialValues: {
      code: "",
      discountPercentage: 0,
      validityStartDate: null,
      validityEndDate: null,
      minimumOrderValue: 0,
    },
    onSubmit: (values) => {
      const formatedValues = {
        ...values,
        validityStartDate: values.validityStartDate?.toISOString(),
        validityEndDate: values.validityEndDate?.toISOString(),
      };

      console.log("form submitted", values, formatedValues);
    },
  });

  return (
    <div>
      <h1 className="pb-5 font-bold mb-5 text-xl text-gray-500 font-display italic">
        Create New Coupon
      </h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box component={"form"} onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="code"
                label="Coupon Code"
                value={formik.values.code}
                onChange={formik.handleChange}
                error={formik.touched.code && Boolean(formik.errors.code)}
                helperText={formik.touched.code && formik.errors.code}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="discountPercentage"
                label="Discount Percentage"
                value={formik.values.discountPercentage}
                onChange={formik.handleChange}
                error={
                  formik.touched.discountPercentage &&
                  Boolean(formik.errors.discountPercentage)
                }
                helperText={
                  formik.touched.discountPercentage &&
                  formik.errors.discountPercentage
                }
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Validity Start Date"
                name="validityStartDate"
                onChange={formik.handleChange}
                value={formik.values.validityStartDate}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Validity End Date"
                name="validityEndDate"
                onChange={formik.handleChange}
                value={formik.values.validityEndDate}
              />
            </Grid2>

            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                name="minimumOrderValue"
                label="Minimum Order Value"
                value={formik.values.minimumOrderValue}
                onChange={formik.handleChange}
                error={
                  formik.touched.minimumOrderValue &&
                  Boolean(formik.errors.minimumOrderValue)
                }
                helperText={
                  formik.touched.minimumOrderValue &&
                  formik.errors.minimumOrderValue
                }
              />
            </Grid2>

            <Grid2 size={{ xs: 12 }}>
              <Button variant="contained" fullWidth sx={{ py: ".8rem" }}>
                Create Coupon
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default AddNewCouponForm;

# next well be the HomePage Admin Dashboard
# create a new component in src/admin/pages/HomePage/HomeCategoryTable.tsx
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function HomeCategoryTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.calories}</StyledTableCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">
                <Button>
                  <DriveFileRenameOutlineIcon />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


# then in src/admin/pages/HomePage/ElectronicTable.tsx
import HomeCategoryTable from "./HomeCategoryTable";

const ElectronicTable = () => {
  return (
    <div>
      <HomeCategoryTable />
    </div>
  );
};

export default ElectronicTable;


# YOU FORGOT TO IMPORT THIS in AdminDraweList.tsx
import {
  AccountBox,
  Add,
  Category,
  Dashboard,
  ElectricBolt,
  Home,
  IntegrationInstructions,
  LocalOffer,
  Logout,
} from "@mui/icons-material";
import DrawerList from "../../component/DrawerList";

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <Dashboard className="text-[#acb2c4]" />,
    activeIcon: <Dashboard className="text-white" />,
  },
  {
    name: "Coupons",
    path: "/admin/coupon",
    icon: <IntegrationInstructions className="text-[#acb2c4]" />,
    activeIcon: <IntegrationInstructions className="text-white" />,
  },
  {
    name: "Add New Coupon",
    path: "/admin/add-coupon",
    icon: <Add className="text-[#acb2c4]" />,
    activeIcon: <Add className="text-white" />,
  },
  {
    name: "Home Page",
    path: "/admin/home-grid",
    icon: <Home className="text-[#acb2c4]" />,
    activeIcon: <Home className="text-white" />,
  },



# 1:00:24

# 1:01:07

# in ShopByCategoryTable.tsx
import HomeCategoryTable from "./HomeCategoryTable";

const ShopByCategoryTable = () => {
  return (
    <div>
      <HomeCategoryTable />
    </div>
  );
};

export default ShopByCategoryTable;


# in GridTable.tsx
import HomeCategoryTable from "./HomeCategoryTable";

const GridTable = () => {
  return (
    <div>
      <HomeCategoryTable />
    </div>
  );
};

export default GridTable;


# THEN NEXT WELL BE THE DEAL
# first in src/admin/pages/Homepage
# create this 3 components, DealTable.tsx, DealCategoryTable.tsx, CreateDealForm.tsx
# rafce each one

# then in Deal.tsx
import { Button } from "@mui/material";
import { useState } from "react";
import DealTable from "./DealTable";
import DealCategoryTable from "./DealCategoryTable";
import CreateDealForm from "./CreateDealForm";

const tabs = ["Deals", "Category", "Create Deal"];

const Deal = () => {
  const [activeTab, setActiveTab] = useState("Deals");

  return (
    <div>
      <div className="flex gap-4">
        {tabs.map((item) => (
          <Button
            onClick={() => setActiveTab(item)}
            variant={activeTab == item ? "contained" : "outlined"}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="mt-5">
        {activeTab == "Deals" ? (
          <DealTable />
        ) : activeTab == "Category" ? (
          <DealCategoryTable />
        ) : (
          <CreateDealForm />
        )}
      </div>
    </div>
  );
};

export default Deal;


# then copy the whole code in HomeCategoryTable.tsx
# then paste it on DealTable.tsx, renamed the component export name

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function DealTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell align="right">Discount</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.calories}</StyledTableCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">
                <Button>
                  <DriveFileRenameOutlineIcon />
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button>
                  <DeleteForeverIcon sx={{ color: "red" }} />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



# then in DealCategoryTable.tsx
import HomeCategoryTable from "./HomeCategoryTable";

const DealCategoryTable = () => {
  return (
    <div>
      <HomeCategoryTable />
    </div>
  );
};

export default DealCategoryTable;


# then in CreateDealForm.tsx

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";

const CreateDealForm = () => {
  const formik = useFormik({
    initialValues: {
      discount: 0,
      category: "",
    },
    onSubmit: (values) => {
      console.log("submit", values);
    },
  });

  return (
    <Box
      component={"form"}
      onSubmit={formik.handleSubmit}
      className="!space-y-6"
    >
      <Typography variant="h4" className="text-center">
        Deal Creation
      </Typography>

      <TextField
        fullWidth
        name="discount"
        label="Discount"
        value={formik.values.discount}
        onChange={formik.handleChange}
        error={formik.touched.discount && Boolean(formik.errors.discount)}
        helperText={formik.touched.discount && formik.errors.discount}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.values.category}
          label="Category"
          onChange={formik.handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Button fullWidth sx={{ py: ".9rem" }} type="submit" variant="contained">
        Create Deal
      </Button>
    </Box>
  );
};

export default CreateDealForm;


# then in Deal.tsx

<div className="mt-5">
        {activeTab == "Deals" ? (
          <DealTable />
        ) : activeTab == "Category" ? (
          <DealCategoryTable />
        ) : (
          <div className="mt-5 flex flex-col justify-center items-center h-[70vh]">
            <CreateDealForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Deal;



# NEXT NEXT WELL CONNECT THE BACKEND TO FRONTEND
# 1:01:31

# BUT WELL NEED TO FIX THE ERROR WE GET ON OUR BACKEND
# in Home.java

package com.mackodev.modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Home {

    private List<HomeCategory> grid;

    private List<HomeCategory> shopByCategories;

    private List<HomeCategory> electricCategories;

    private List<HomeCategory> dealCategories;

    private List<Deal> deals;

}


# and then run the backend
# in browser => http://localhost:5454/
# result well be like this
{
  "message": "Welcome to ShirtThreads a multi vendor ecommerce website"
}


# lets make an api call from backend to frontend

# in FE
# create new folder src/State/fetchProduct.ts
import axios from "axios";

const api = "http://localhost:5454/products";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(api);
    console.log("response", response);
  } catch (error) {
    console.log(error);
  }
};


# then on App.tsx

import AdminDashboard from "./admin/pages/Dashboard/AdminDashboard";
import { useEffect } from "react";
import { fetchProducts } from "./State/fetchProduct";

const App = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ThemeProvider theme={customTheme}>


# then if you check the console in FE it will display an error a (CORS ERROR)

# tosolve this goto backend
# src/main/java/com.marckodev/comfig/AppConfig.java
# notice this part => cfg.setAllowedOrigins(Collections.singletonList("http://localhost:5173"));

private CorsConfigurationSource corsConfigurationSource() {
        return new CorsConfigurationSource() {
            @Override
            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {

                CorsConfiguration cfg = new CorsConfiguration();
                cfg.setAllowedOrigins(Collections.singletonList("http://localhost:5173"));
                cfg.setAllowedMethods(Collections.singletonList("*"));
                cfg.setAllowedHeaders(Collections.singletonList("*"));
                cfg.setAllowCredentials(true);
                cfg.setExposedHeaders(Collections.singletonList("Authorization"));
                cfg.setMaxAge(3600l);
                return cfg;
            }
        };
    }

# and then rerun the server/backend and check the console in FE it will now response data
# 1:01:46

# goto redux toolkit website, getting started
# npm install @reduxjs/toolkit
# npm install react-redux

# REDUX THUNK

# lets create a store
# in src/State/Store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;


# then wrap the App in main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./State/Store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);


# create a custom api endpoint, in src/config/Api.ts
import axios from "axios";

export const API_URL = "http://localhost:5454";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});



# then in src/State/seller/sellerSlice.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const fetchSellerProfile = createAsyncThunk(
  "/sellers/fetchSellerProfile",
  async (jwt: string, { rejectWithValue }) => {
    try {
      const response = await api.get("/sellers/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("fetch seller profile ", response);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);



# then in src/State/AuthSlice.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";

export const sendLoginSignupOtp = createAsyncThunk(
  "/auth/sendLoginSignupOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const response = await api.get("/auth/sent/login-signup-otp");
      console.log("login otp ", response);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);



# 1:02:10


# in Authentication, if we click the account profile or Login, we will login with provided otp sent to our email
# so to implement this in FE, goto SellerLoginForm.tsx

import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useAppDispatch } from "../../../State/Store";
import { sendLoginSignupOtp } from "../../../State/AuthSlice";

const SellerLoginForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
    },
  });

  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };

  return (

  ------------------------------------------------------------------

   </div>
        )}

        <Button
          onClick={handleSendOtp}
          fullWidth
          variant="contained"
          sx={{ py: "11px" }}
        >
          Send OTP
        </Button>
        <Button fullWidth variant="contained" sx={{ py: "11px" }}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default SellerLoginForm;


# but we got error on console
# to solve this goto src/State/AuthSlice.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";

export const sendLoginSignupOtp = createAsyncThunk(
  "/auth/sendLoginSignupOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/sent/login-signup-otp", { email });
      console.log("login otp ", response);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);


# and then in Login/become-seller login, provide email and send OTP
# as you can see we got the right response in console that says "sent otp successfully"

# now we login with email with otp provided

# in AuthSlice.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";

export const sendLoginSignupOtp = createAsyncThunk(
  "/auth/sendLoginSignupOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/sent/login-signup-otp", { email });
      console.log("login otp ", response);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

export const signin = createAsyncThunk<any, any>(
  "/auth/signin",
  async (loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signin", loginRequest);
      console.log("login otp ", response.data);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);



# in sellerAuthSlice.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const sellerLogin = createAsyncThunk<any, any>(
  //   "/sellers/login",
  "/sellerAuth/sellerLogin",
  async (loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/sellers/login", loginRequest);
      console.log("login otp ", response.data);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);


# in SellerLoginForm.tsx

import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useAppDispatch } from "../../../State/Store";
import { sendLoginSignupOtp, signin } from "../../../State/AuthSlice";
import { sellerLogin } from "../../../State/seller/sellerAuthSlice";

const SellerLoginForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
      // dispatch(sellerLogin(values));
      dispatch(sellerLogin({ email: values.email, otp: values.otp }));
    },
  });

  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };


# NOW WE NEED TO STORE THIS JWT IN OUR LOCAL STORAGE

# in sellerAuthSlice.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const sellerLogin = createAsyncThunk<any, any>(
  //   "/sellers/login",
  "/sellerAuth/sellerLogin",
  async (loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/sellers/login", loginRequest);
      console.log("login otp ", response.data);
      const jwt = response.data.jwt;
      localStorage.setItem("jwt", jwt);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);


# edit the App.tsx

import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./admin/pages/Dashboard/AdminDashboard";
import Navbar from "./customer/components/Navbar/Navbar";
import Account from "./customer/pages/Account/Account";
import BecomeSeller from "./customer/pages/Become Seller/BecomeSeller";
import Cart from "./customer/pages/Cart/Cart";
import Checkout from "./customer/pages/Checkout/Checkout";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";
import ProductDetails from "./customer/pages/ProductDetails/ProductDetails";
import Review from "./customer/pages/Review/Review";
import SellerDashboard from "./seller/pages/SellerDashboard/SellerDashboard";
import { fetchSellerProfile } from "./State/seller/sellerSlice";
import { useAppDispatch } from "./State/Store";
import customTheme from "./Theme/customTheme";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
  }, []);

  return (


# then try to send OTP again then LOGIN
# goto homepage, refresh
# then check console it will fetch seller profile

# NOW WE WILL STORE THE SELLER PROFILE DATA INSIDE OUR STORE REDUX

# in sellerSlice.ts create a reducer builder for profile
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const fetchSellerProfile = createAsyncThunk(
  "/sellers/fetchSellerProfile",
  async (jwt: string, { rejectWithValue }) => {
    try {
      const response = await api.get("/sellers/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("fetch seller profile ", response.data);
      return response.data;
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

interface SellerState {
  sellers: any[];
  selectedSeller: any;
  profile: any;
  report: any;
  loading: boolean;
  error: any;
}

const initialState: SellerState = {
  sellers: [],
  selectedSeller: null,
  profile: null,
  report: null,
  loading: false,
  error: null,
};

const sellerSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellerProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSellerProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchSellerProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default sellerSlice.reducer;


# then import/call the reducer sellerSlice in Store.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./seller/sellerSlice";

const rootReducer = combineReducers({
  seller: sellerSlice,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;


# then in App.tsx, navigate the page to seller profile page
import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminDashboard from "./admin/pages/Dashboard/AdminDashboard";
import Navbar from "./customer/components/Navbar/Navbar";
import Account from "./customer/pages/Account/Account";
import BecomeSeller from "./customer/pages/Become Seller/BecomeSeller";
import Cart from "./customer/pages/Cart/Cart";
import Checkout from "./customer/pages/Checkout/Checkout";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";
import ProductDetails from "./customer/pages/ProductDetails/ProductDetails";
import Review from "./customer/pages/Review/Review";
import SellerDashboard from "./seller/pages/SellerDashboard/SellerDashboard";
import { fetchSellerProfile } from "./State/seller/sellerSlice";
import store, { useAppDispatch, useAppSelector } from "./State/Store";
import customTheme from "./Theme/customTheme";

const App = () => {
  const dispatch = useAppDispatch();
  const { seller } = useAppSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
  }, []);

  useEffect(() => {
    if (seller.profile) {
      navigate("/seller");
    }
  }, [seller.profile]);

  return (
    <ThemeProvider theme={customTheme}>


# NOW LETS IMPLEMENT THE API FOR SELLERS PRODUCTS DATA

# create a new folder src/types/SellerTypes.ts
export interface PickupAddress {
  name: string;
  mobile: string;
  pinCode: string;
  address: string;
  locality: string;
  city: string;
  state: string;
}

export interface BankDetails {
  accountNumber: string;
  ifscCode: string;
  accountHolderName: string;
}

export interface BusinessDetails {
  businessName: string;
}

export interface Seller {
  id?: number;
  mobile: string;
  otp: string;
  GSTIN: string;
  pickupAddress: PickupAddress;
  bankDetails: BankDetails;
  sellerName: string;
  email: string;
  businessDetails: BusinessDetails;
  password: string;
  accountStatus?: string;
}

export interface SellerReport {
  id: number;
  seller: Seller;
  totalEarnings: number;
  totalSales: number;
  totalRefunds: number;
  totalTax: number;
  netEarnings: number;
  totalOrders: number;
  canceledOrders: number;
  totalTransactions: number;
}


# src/types/ProductTypes.ts
import { Seller } from "./SellerTypes";

export interface Product {
  id?: number;
  title: string;
  description: string;
  mrpPrice: number;
  sellingPrice: number;
  discountPrice: number;
  quantity: number;
  color: string;
  images: string[];
  numRatings?: number;
  category?: Category;
  seller?: Seller;
  createdAt?: Date;
  sizes: string;
}

export interface Category {
  id?: number;
  name: string;
  categoryId: string;
  parentCategory?: Category;
  level: number;
}


# src/State/seller/sellerProductSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Product } from "../../types/ProductTypes";

export const fetchSellerProducts = createAsyncThunk<Product[], any>(
  "/sellerProduct/fetchSellerProducts",

  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`/sellers/products`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = response.data;

      console.log("seller products", data);
      return data;
    } catch (error) {
      console.log("error - - -", error);
      throw error;
    }
  }
);

export const createProduct = createAsyncThunk<
  Product,
  { request: any; jwt: string | null }
>(
  "/sellerProduct/createProduct",

  async (args, { rejectWithValue }) => {
    const { request, jwt } = args;

    try {
      const response = await api.post(`/sellers/products`, request, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("product created", response.data);
      return response.data;
    } catch (error) {
      console.log("error - - -", error);
      //   throw error;
    }
  }
);

interface SellerProductState {
  products: Product[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: SellerProductState = {
  products: [],
  loading: false,
  error: null,
};

const sellerProductSlice = createSlice({
  name: "sellerProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSellerProducts.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchSellerProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
    builder.addCase(fetchSellerProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default sellerProductSlice.reducer;


# then register the reducer in our Store, in Store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";

const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
});

# in src/seller/pages/Products/ProductTable.tsx

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch } from "../../../State/Store";
import { useEffect } from "react";
import { fetchSellerProducts } from "../../../State/seller/sellerProductSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({

------------------------------------------------------------------------

export default function ProductTable() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSellerProducts(localStorage.getItem("jwt")));
  }, []);

  return (
    <TableContainer component={Paper}>


# then in FE try togo to seller/products dashboard and check the console it will response our producst from the database

# then lets display each product data to our product table
# same file ProductTable.tsx
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import store, { useAppDispatch, useAppSelector } from "../../../State/Store";
import { useEffect } from "react";
import { fetchSellerProducts } from "../../../State/seller/sellerProductSlice";
import { Product } from "../../../types/ProductTypes";
import { Button, IconButton } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";


-----------------------------------------------------------

export default function ProductTable() {
  const dispatch = useAppDispatch();
  const { sellerProduct } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(fetchSellerProducts(localStorage.getItem("jwt")));
  }, []);

  return (
    <TableContainer component={Paper}>

--------------------------------------------------------------

 <TableBody>
          {sellerProduct.products.map((item: Product) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                <div className="flex gap-1 flex-wrap">
                  {item.images.map((image) => (
                    <img className="w-20 rounded-md" alt="" src={image} />
                  ))}
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">{item.title}</StyledTableCell>
              <StyledTableCell align="right">{item.mrpPrice}</StyledTableCell>
              <StyledTableCell align="right">
                {item.sellingPrice}
              </StyledTableCell>
              <StyledTableCell align="right">{item.color}</StyledTableCell>
              <StyledTableCell align="right">
                {<Button size="small">Available</Button>}
              </StyledTableCell>
              <StyledTableCell align="right">
                {
                  <IconButton color="primary" size="small">
                    <EditNoteIcon />
                  </IconButton>
                }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

# 15:34 => category data
# 23:55 => AddProduct.tsx

1:03:46

# we cant add product because of our code in Third Category so to fix it
# in AddProduct.tsx edit the Grid2 => Third Category
<Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category-label">Third Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category3"
                value={formik.values.category3}
                onChange={formik.handleChange}
                label="Third Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {formik.values.category2 &&
                  categoryThree[formik.values.category]
                    ?.filter(
                      (item) =>
                        item.parentCategoryId === formik.values.category2
                    )
                    ?.map((item) => (
                      <MenuItem key={item.categoryId} value={item.categoryId}>
                        {item.name}
                      </MenuItem>
                    ))}
              </Select>

              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid2>


# NOW LETS GO TO CUSTOMER SIDE
# first lets create slice for fetching product,search and paginate methods

# in src/State/customer/ProductSlice.ts

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Product } from "../../types/ProductTypes";

export const API_URL = "http://localhost:5454";

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/${productId}`);

      const data = response.data;
      console.log("data: " + data);
      return data;
    } catch (error: any) {
      console.log("error: " + error);
      rejectWithValue(error.message);
    }
  }
);

export const searchProduct = createAsyncThunk(
  "products/searchProduct",
  async (query, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/search`, {
        params: {
          query,
        },
      });

      const data = response.data;
      console.log("search product data: " + data);
      return data;
    } catch (error: any) {
      console.log("error: " + error);
      rejectWithValue(error.message);
    }
  }
);

export const fetchAllProducts = createAsyncThunk<any, any>(
  "products/fetchAllProducts",
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}`, {
        params: {
          ...params,
          pageNumber: params.pageNumber || 0,
        },
      });

      const data = response.data;
      console.log("All product data: " + data);
      return data;
    } catch (error: any) {
      console.log("error: " + error);
      rejectWithValue(error.message);
    }
  }
);

interface ProductState {
  product: Product | null;
  products: Product[];
  totalPages: number;
  loading: boolean;
  error: string | null | undefined;
  searchProduct: Product[];
}

const initialState: ProductState = {
  product: null,
  products: [],
  totalPages: 1,
  loading: false,
  error: null,
  searchProduct: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(searchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.searchProduct = action.payload;
    });
    builder.addCase(searchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;


# then call this on our Store.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";
import productSlice from "./customer/ProductSlice";

const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
});


# lets add logout method
# in src/State/AuthSlice.ts

export const signin = createAsyncThunk<any, any>(
  "/auth/signin",
  async (loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signin", loginRequest);
      console.log("login otp ", response.data);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

export const logout = createAsyncThunk<any, any>(
  "/auth/logout",
  async (navigate, { rejectWithValue }) => {
    try {
      localStorage.clear();
      console.log("logout successfully");
      navigate("/");
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);


# then implement it to FE UI
# in src/component/DrawerList.tsx
import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../State/Store";
import { logout } from "../State/AuthSlice";

--------------------------------------------------------------------

const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProp) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => [dispatch(logout(navigate))];

---------------------------------------------------------------------

<Divider variant="middle" className="bg-[#7a8ac0]" />
        <div className="space-y-2">
          {menu2.map((item, index: number) => (
            <div
              onClick={() => {
                navigate(item.path);
                if (item.path == "/") handleLogout();
              }}
              className="px-4 cursor-pointer"
              key={index}
            >
              <p


# lets check our created code to fetchAllProducts is working
# in src/customer/pages/Product/Product/tsx
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../State/Store";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchAllProducts } from "../../../State/customer/ProductSlice";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryId } = useParams();

-------------------------------------------------------------------


  useEffect(() => {
    const [minPrice, maxPrice] = searchParams.get("price")?.split("-") || [];

    dispatch(fetchAllProducts({ categoryId }));
  }, [categoryId]);

  return (
    <div className="-z-10 mt-10">


# now if we refresh our app we get in console => All product data: [object Object]
# this is an error
# to fix this goto ProductSlice.ts and fix the codes

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Product } from "../../types/ProductTypes";

export const API_URL = "/products";

export const fetchProductById = createAsyncThunk<Product, number>(
  "products/fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/${productId}`);

      const data = response.data;
      console.log("Product details data: ", data);
      return data;
    } catch (error: any) {
      console.log("error: " + error);
      rejectWithValue(error.message);
    }
  }
);

export const searchProduct = createAsyncThunk(
  "products/searchProduct",
  async (query, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/search`, {
        params: {
          query,
        },
      });

      const data = response.data;
      console.log("search product data: ", data);
      return data;
    } catch (error: any) {
      console.log("error: " + error);
      rejectWithValue(error.message);
    }
  }
);

export const fetchAllProducts = createAsyncThunk<Product[], any>(
  "products/fetchAllProducts",
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}`, {
        params: {
          ...params,
          pageNumber: params.pageNumber || 0,
        },
      });

      const data = response.data;
      console.log("All product data: ", data);
      return data;
    } catch (error: any) {
      console.log("error: " + error);
      rejectWithValue(error.message);
    }
  }
);

interface ProductState {
  product: Product | null;
  products: Product[];
  totalPages: number;
  loading: boolean;
  error: string | null | undefined;
  searchProduct: Product[];
}

const initialState: ProductState = {
  product: null,
  products: [],
  totalPages: 1,
  loading: false,
  error: null,
  searchProduct: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(searchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.searchProduct = action.payload;
    });
    builder.addCase(searchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;


# 1:04:24

# i edit the third category for adding product, AddProduct.tsx
FROM THIS =>
 {/* {formik.values.category2 &&
                  categoryThree[formik.values.category]
                    ?.filter(
                      (item) =>
                        item.parentCategoryId === formik.values.category2
                    )
                    ?.map((item) => (
                      <MenuItem key={item.categoryId} value={item.categoryId}>
                        {item.name}
                      </MenuItem>
                    ))} */}

TO THIS => 
<FormControl
              fullWidth
              error={
                formik.touched.category3 && Boolean(formik.errors.category3)
              }
              required
            >
              <InputLabel id="category3-label">Third Category</InputLabel>
              <Select
                labelId="category3-label"
                id="category3"
                name="category3"
                value={formik.values.category3}
                onChange={formik.handleChange}
                label="Third Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {formik.values.category2 &&
                  categoryThree[formik.values.category]?.length > 0 &&
                  childCategory(
                    categoryThree[formik.values.category],
                    formik.values.category2
                  )?.map((item: any) => (
                    <MenuItem key={item.categoryId} value={item.categoryId}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
              {formik.touched.category3 && formik.errors.category3 && (
                <FormHelperText>{formik.errors.category3}</FormHelperText>
              )}
            </FormControl>


# we want to display in console the all the products, when we click on category in navbar dropdown

# in src/customer/pages/Product/Product.tsx
import { FilterAlt } from "@mui/icons-material";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../State/Store";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchAllProducts } from "../../../State/customer/ProductSlice";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryId } = useParams();

  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const [minPrice, maxPrice] = searchParams.get("price")?.split("-") || [];

    dispatch(fetchAllProducts({ categoryId }));
  }, [categoryId]);

  return (
    <div className="-z-10 mt-10">


# and then refresh the page and look in the console we see all product data 

# LETS MAKE DINAMIC DISPLAYING OUR PRODUCTS
# in src/customer/pages/Product/Product.tsx
import { FilterAlt } from "@mui/icons-material";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import store, { useAppDispatch, useAppSelector } from "../../../State/Store";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchAllProducts } from "../../../State/customer/ProductSlice";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();
  const { product } = useAppSelector((store) => store);

------------------------------------------------------------------

 useEffect(() => {
    const [minPrice, maxPrice] = searchParams.get("price")?.split("-") || [];

    dispatch(fetchAllProducts({}));
  }, [category]);

  return (
    <div className="-z-10 mt-10">

------------------------------------------------------------------

<Divider />
          <section className="products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
            {product.products.map((item) => (
              <ProductCard item={item} />
            ))}
          </section>
          <div className="flex justify-center py-10">
            <Pagination
              count={10}
              onChange={(e, value) => handlePageChange(value)}
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;


# then in ProductCard.tsx
import { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { Product } from "../../../types/ProductTypes";

const ProductCard = ({ item }: { item: Product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: any;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % item.images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);



  return (
    <>
      <div className="group px-4 pt-4 relative">
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {item.images.map((item, index) => (
            <img
              className="card-media object-top"
              src={item}
              alt=""
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}

          {isHovered && (


# also fix the ProductSlice.ts

export const fetchAllProducts = createAsyncThunk<any, any>(
  "products/fetchAllProducts",
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}`, {
        params: {
          ...params,
          pageNumber: params.pageNumber || 0,

-------------------------------------------------------------

builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.content;
    });

# AND NOW YOU CAN SEE OUR PRODUCT IS FETCHING IN EVERY CATEGORY

# and then implement the sidebar FILTER

# in Product.tsx

import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FilterSection from "./FilterSection";
import { FilterAlt } from "@mui/icons-material";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import store, { useAppDispatch, useAppSelector } from "../../../State/Store";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchAllProducts } from "../../../State/customer/ProductSlice";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();
  const { product } = useAppSelector((store) => store);

  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const [minPrice, maxPrice] = searchParams.get("price")?.split("-") || [];
    const color = searchParams.get("color");
    const pageNumber = page - 1;
    const minDiscount = searchParams.get("discount")
      ? Number(searchParams.get("discount"))
      : undefined;

    const newFilter = {
      color: color || "",
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      minDiscount,
      pageNumber,
    };

    dispatch(fetchAllProducts(newFilter));
  }, [category, searchParams]);


# NEXT LETS EMPLEMENT THE PRODUCT DETAILS
# in ProductCard.tsx
import { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { Product } from "../../../types/ProductTypes";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }: { item: Product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

------------------------------------------------------


  return (
    <>
      <div
        onClick={() =>
          navigate(
            `/product-details/${item.category?.categoryId}/${item.title}/${item.id}`
          )
        }
        className="group px-4 pt-4 relative"
      >
        <div
          className="card"


# THEN LETS IMPLEMENT ALL THE DETAILS OF THE PRODUCT WHEN IT WAS CLICK 
# in ProductDetails.tsx

import React, { useEffect, useState } from "react";
import {
  Add,
  FavoriteBorder,
  LocalMallOutlined,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { Button, Divider } from "@mui/material";
import { green, orange } from "@mui/material/colors";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";
import store, { useAppDispatch, useAppSelector } from "../../../State/Store";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../../State/customer/ProductSlice";

const ProductDetails = () => {
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const { product } = useAppSelector((store) => store);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    dispatch(fetchProductById(Number(productId)));
  }, [productId]);

  const handleActiveImage = (value: number) => () => {
    setActiveImage(value);
  };

  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {product.product?.images.map((item, index) => (
              <img
                onClick={handleActiveImage(index)}
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src={item}
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src={product.product?.images[activeImage]}
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-3xl font-display italic">
            {product.product?.seller?.businessDetails.businessName}
          </h1>
          <p className="text-gray-500 font-semibold">
            {product.product?.title}
          </p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4.5</span>
              <StarIcon sx={{ color: orange[400], fontSize: "20px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>498 Ratings</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">
                ₱ {product.product?.sellingPrice}
              </span>
              <span className="line-through text-gray-400">
                ₱ {product.product?.mrpPrice}
              </span>
              <span className="text-primary font-semibold">
                {product.product?.discountPercent}%
              </span>
            </div>

            <div>
              <p className="text-sm">
                Easy free returns. Fast worldwide shipping
              </p>
            </div>

            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-4">
                <Shield sx={{ color: green[700] }} />
                <p>Official Lord of the Rings merchandise</p>
              </div>
              <div className="flex items-center gap-4">
                <WorkspacePremium sx={{ color: green[700] }} />
                <p>Premium unisex graphic hoodie</p>
              </div>
              <div className="flex items-center gap-4">
                <LocalShipping sx={{ color: green[700] }} />
                <p>90s-inspired boxy fit with dropped shoulders</p>
              </div>
              <div className="flex items-center gap-4">
                <Wallet sx={{ color: green[700] }} />
                <p>Pay on delivery always available</p>
              </div>
            </div>

            <div className="mt-7 space-y-2">
              <h1 className="text-gray-700 font-semibold">QUANTITY</h1>
              <div className="flex items-center gap-2 w-[140px] justify-between">
                <Button
                  disabled={quantity == 1}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <Remove />
                </Button>
                <span>{quantity}</span>
                <Button onClick={() => setQuantity(quantity + 1)}>
                  <Add />
                </Button>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <Button
                fullWidth
                variant="contained"
                startIcon={<LocalMallOutlined />}
                sx={{ py: "1rem" }}
                className="!font-display italic !text-1xl !font-bold"
              >
                Add to Cart
              </Button>

              <Button
                fullWidth
                variant="contained"
                startIcon={<FavoriteBorder />}
                sx={{ py: "1rem", fontSize: "15px" }}
                className="!font-display italic !text-1xl !font-bold"
              >
                Wishlist
              </Button>
            </div>

            <div className="mt-5">
              <p className="text-gray-500 font-semibold">
                {product.product?.description}
              </p>
            </div>

            <div className="mt-12 space-y-5">
              <ReviewCard />
              <Divider />
            </div>
          </div>
        </section>
      </div>

      <div className="mt-20">
        <h1 className="font-extrabold text-3xl font-display italic uppercase">
          You May Also Like
        </h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;



# NEXT LETS EMPLEMENT THE ADD TO CART AND WISHLIST BUTTON
# BUT WE NEED TO AUTHENTICATE THE USER CUSTOMER FIRST
# SO WE NEED TO ADD LOGIN PAGE FOR CUSTOMER 

# create new folder in src/customer/pages/Auth/Auth.tsx
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Button } from "@mui/material";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center h-[90vh] items-center">
      <div className="max-w-md h-[85vg] rounded-md shadow-lg">
        <img
          className="w-full rounded-t-md"
          src="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7876.jpg?t=st=1739419497~exp=1739423097~hmac=bba21e538044edc7c4f2538affcefc6a249e6e3c561e28deb300a35f90dd65a5&w=740"
          alt=""
        />
        {isLogin ? <LoginForm /> : <RegisterForm />}

        <div className="flex items-center gap-1 justify-center mt-5">
          <p>{isLogin && "Don't "} Have an Account</p>
          <Button size="small" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Create Account" : "Login"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;


# create also this src/customer/pages/Auth/LoginForm.tsx
const LoginForm = () => {
  return <div>LoginForm</div>;
};

export default LoginForm;


# create also this src/customer/pages/Auth/RegisterForm.tsx
const RegisterForm = () => {
  return <div>RegisterForm</div>;
};

export default RegisterForm;


# and then edit the codes in Navbar.tsx
</IconButton>
            {false ? (
              <Button
                onClick={() => navigate("/account/orders")}
                className="flex items-center gap-2"
              >
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://imgs.search.brave.com/0T82UtGZ1MJKNUs52cZ1xwH-vaXD2OELuZMouLFaxjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1jZG4uaHlwYi5z/dC9odHRwczovL2h5/cGViZWFzdC5jb20v/aW1hZ2UvMjAyNC8x/Mi8yMy9rYWlqdS1u/by04LXNlYXNvbi0y/LWFuaW1lLTIwMjUt/c3VtbWVyLXByZW1p/ZXJlLWluZm8tMDAw/LmpwZz9maXQ9bWF4/JmNicj0xJnE9OTAm/dz03NTAmaD01MDA"
                />
                <h1 className="font-semibold hidden lg:block !text-primary">
                  Marcko
                </h1>
              </Button>
            ) : (
              <Button onClick={() => navigate("/login")} variant="contained">
                Login
              </Button>
            )}
            <IconButton>


# same in App.tsx
 return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/products/:category" element={<Product />} />


# then add more design and functionality in LoginForm.tsx

import { useFormik } from "formik";
import { useAppDispatch } from "../../../State/Store";
import { Button, TextField } from "@mui/material";
import { sendLoginSignupOtp, signin } from "../../../State/AuthSlice";

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
      dispatch(signin(values));
    },
  });

  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };

  return (
    <div>
      <div className="!space-y-5">
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {true && (
          <div className="space-y-2">
            <p className="font-medium text-sm opacity-50">
              Enter OTP sent to your email
            </p>
            <TextField
              fullWidth
              name="otp"
              label="Otp"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
          </div>
        )}

        <Button
          onClick={handleSendOtp}
          fullWidth
          variant="contained"
          sx={{ py: "11px" }}
        >
          Send OTP
        </Button>

        <Button
          onClick={() => formik.handleSubmit()}
          fullWidth
          variant="contained"
          sx={{ py: "11px" }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;


# then in AuthSlice.ts

export const signin = createAsyncThunk<any, any>(
  "/auth/signin",
  async (loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signing", loginRequest);
      console.log("login otp ", response.data);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

# then try to sent OTP then login, it will response in the console =>
login otp  
message: "Login Successfully"
role: "ROLE_CUSTOMER"

# then saved the jwt token in local storage
# in AuthSlice.ts

export const signin = createAsyncThunk<any, any>(
  "/auth/signin",
  async (loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signing", loginRequest);
      console.log("login otp ", response.data);
      localStorage.setItem("jwt", response.data.jwt);
      return response.data.jwt;
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);


# also in RegisterForm.tsx

import { useFormik } from "formik";
import { useAppDispatch } from "../../../State/Store";
import { sendLoginSignupOtp } from "../../../State/AuthSlice";
import { Button, TextField } from "@mui/material";

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      fullName: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
      // dispatch(sellerLogin(values));
      //   dispatch(sellerLogin({ email: values.email, otp: values.otp }));
    },
  });

  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };

  return (
    <div>
      {/* <h1 className="text-center font-bold text-xl  pb-8">LoginForm</h1> */}
      <div className="!space-y-5">
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {true && (
          <div className="!space-y-3">
            <p className="font-medium text-sm opacity-50">
              Enter OTP sent to your email
            </p>
            <TextField
              fullWidth
              name="otp"
              label="Otp"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
            <TextField
              fullWidth
              name="fullName"
              label="Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </div>
        )}

        {false && (
          <Button
            onClick={handleSendOtp}
            fullWidth
            variant="contained"
            sx={{ py: "11px" }}
          >
            Send OTP
          </Button>
        )}

        <Button
          onClick={() => formik.handleSubmit()}
          fullWidth
          variant="contained"
          sx={{ py: "11px" }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;


# create types for our user, src/types/userTypes.ts
export interface Address {
  id?: number;
  name: string;
  mobile: string;
  pinCode: string;
  address: string;
  locality: string;
  city: string;
  state: string;
}

export enum UserRole {
  ROLE_CUSTOMER = "ROLE_CUSTOMER",
  ROLE_ADMIN = "ROLE_ADMIN",
  ROLE_SELLER = "ROLE_SELLER",
}

export interface User {
  id?: number;
  password?: string;
  email: string;
  fullName: string;
  mobile?: string;
  role: UserRole;
  addresses?: Address[];
}


# lets create the functionality method for signup/register reducer in AuthSlice.ts

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/Api";

export const sendLoginSignupOtp = createAsyncThunk(
  "/auth/sendLoginSignupOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/sent/login-signup-otp", { email });
      console.log("login otp ", response);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

export const signin = createAsyncThunk<any, any>(
  "/auth/signin",
  async (loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signing", loginRequest);
      console.log("login otp ", response.data);
      localStorage.setItem("jwt", response.data.jwt);
      return response.data.jwt;
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

export const signup = createAsyncThunk<any, any>(
  "/auth/signup",
  async (signupRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signup", signupRequest);
      console.log("login otp ", response.data);
      localStorage.setItem("jwt", response.data.jwt);
      return response.data.jwt;
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

export const fetchUserProfile = createAsyncThunk<any, any>(
  "/api/users/profile",
  async ({ jwt }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signup", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("user profile ", response.data);
      return response.data.jwt;
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

export const logout = createAsyncThunk<any, any>(
  "/auth/logout",
  async (navigate, { rejectWithValue }) => {
    try {
      localStorage.clear();
      console.log("logout successfully");
      navigate("/");
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

interface AuthState {
  jwt: string | null;
  otpSent: boolean;
  isLoggedIn: boolean;
  user: any | null;
}

const initialState: AuthState = {
  jwt: null,
  otpSent: false,
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, action) => {
      state.jwt = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.jwt = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
  },
});

export default authSlice.reducer;


# then call this in Store.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";
import productSlice from "./customer/ProductSlice";
import authSlice from "./AuthSlice";

const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
  auth: authSlice,
});


# then in App.tsx

const App = () => {
  const dispatch = useAppDispatch();
  const { seller, auth } = useAppSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
  }, []);

  useEffect(() => {
    if (seller.profile) {
      navigate("/seller");
    }
  }, [seller.profile]);

  useEffect(() => {
    dispatch(
      fetchUserProfile({ jwt: auth.jwt || localStorage.getItem("jwt") })
    );
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={customTheme}>


# we got error so fix AuthSlice.ts, fetchUserProfile and loading state

export const fetchUserProfile = createAsyncThunk<any, any>(
  "/auth/fetchUserProfile",
  async ({ jwt }, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/users/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("user profile ", response.data);
      return response.data.jwt;
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

export const logout = createAsyncThunk<any, any>(
  "/auth/logout",
  async (navigate, { rejectWithValue }) => {
    try {
      localStorage.clear();
      console.log("logout successfully");
      navigate("/");
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

interface AuthState {
  jwt: string | null;
  otpSent: boolean;
  isLoggedIn: boolean;
  user: any | null;
  loading: boolean;
}

const initialState: AuthState = {
  jwt: null,
  otpSent: false,
  isLoggedIn: false,
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendLoginSignupOtp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendLoginSignupOtp.fulfilled, (state) => {
      state.loading = false;
      state.otpSent = true;
    });
    builder.addCase(sendLoginSignupOtp.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(signin.fulfilled, (state, action) => {
      state.jwt = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.jwt = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
  },
});

export default authSlice.reducer;


# and then in LoginForm.tsx

import { useFormik } from "formik";
import store, { useAppDispatch, useAppSelector } from "../../../State/Store";
import { Button, CircularProgress, TextField } from "@mui/material";
import { sendLoginSignupOtp, signin } from "../../../State/AuthSlice";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((store) => store);

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
      dispatch(signin(values));
    },
  });

  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };

  return (
    <div>
      <div className="!space-y-5">
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {auth.otpSent && (
          <div className="space-y-2">
            <p className="font-medium text-sm opacity-50">
              Enter OTP sent to your email
            </p>
            <TextField
              fullWidth
              name="otp"
              label="Otp"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
          </div>
        )}

        {auth.otpSent ? (
          <Button
            onClick={() => formik.handleSubmit()}
            fullWidth
            variant="contained"
            sx={{ py: "11px" }}
          >
            Login
          </Button>
        ) : (
          <Button
            onClick={handleSendOtp}
            fullWidth
            variant="contained"
            sx={{ py: "11px" }}
          >
            {auth.loading ? <CircularProgress /> : "send otp"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default LoginForm;


# try to login, we login successfully but we still got error
it response => data => message: "Access Denied"

# to solve this
# in AuthSlice.ts
export const fetchUserProfile = createAsyncThunk<any, any>(
  "/auth/fetchUserProfile",
  async ({ jwt }, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/users/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

---------------------------------------------------

interface AuthState {
  jwt: string | null;
  otpSent: boolean;
  isLoggedIn: boolean;
  user: any | null;
  loading: boolean;
}

const initialState: AuthState = {
  jwt: null,
  otpSent: false,
  isLoggedIn: false,
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendLoginSignupOtp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendLoginSignupOtp.fulfilled, (state) => {
      state.loading = false;
      state.otpSent = true;
    });


# then in backend intellej, UserController.java
FROM THIS =>

   @GetMapping("/users/profile")
    public ResponseEntity<User> CreateUserHandler(@RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        return ResponseEntity.ok(user);
    }
}

CHANGE TO THIS =>
 @GetMapping("/api/users/profile")
    public ResponseEntity<User> UserProfileHandler(@RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        return ResponseEntity.ok(user);
    }
}


# and now check the app in browser it response user profile now on console


# and now lets go to Navbar.tsx

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const navigate = useNavigate();
  const { auth } = useAppSelector((store) => store);


-------------------------------------------------------------

            <IconButton>
              <SearchIcon />
            </IconButton>
            {auth.user ? (
              <Button
                onClick={() => navigate("/account/orders")}
                className="flex items-center gap-2"
              >
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://imgs.search.brave.com/0T82UtGZ1MJKNUs52cZ1xwH-vaXD2OELuZMouLFaxjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1jZG4uaHlwYi5z/dC9odHRwczovL2h5/cGViZWFzdC5jb20v/aW1hZ2UvMjAyNC8x/Mi8yMy9rYWlqdS1u/by04LXNlYXNvbi0y/LWFuaW1lLTIwMjUt/c3VtbWVyLXByZW1p/ZXJlLWluZm8tMDAw/LmpwZz9maXQ9bWF4/JmNicj0xJnE9OTAm/dz03NTAmaD01MDA"
                />
                <h1 className="font-semibold hidden lg:block !text-primary">
                  {auth.user.fullName}
                </h1>
              </Button>
            ) : (
              <Button onClick={() => navigate("/login")} variant="contained">
                Login
              </Button>
            )}


# then in src/customer/pages/Account/Account.tsx
import Address from "./Address";
import { useAppDispatch } from "../../../State/Store";
import { logout } from "../../../State/AuthSlice";

----------------------------------------------------

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleClick = (item: any) => {
    if (item.path === "/") {
      dispatch(logout(navigate));
    }
    navigate(item.path);
  };


# then check AuthSlice.ts, create builder reducer for logout
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/Api";
import { User } from "../types/userTypes";

----------------------------------------------------------


export const fetchUserProfile = createAsyncThunk<any, any>(
  "/auth/fetchUserProfile",
  async ({ jwt }, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/users/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("user profile ", response.data);
      return response.data;
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

----------------------------------------------------------------

interface AuthState {
  jwt: string | null;
  otpSent: boolean;
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
}

--------------------------------------------------------

    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.jwt = null;
      state.isLoggedIn = false;
      state.user = null;
    });
  },
});

export default authSlice.reducer;


# and then try logging in and logging out the user customer to test it, it work perfectly fine now


# NOW LETS GO TO CART

# in src/types/cartTypes.ts

import { Product } from "./ProductTypes";
import { User } from "./userTypes";

export interface CartItem {
  id: number;
  cart?: Cart;
  product: Product;
  size: string;
  quantity: number;
  mrpPrice: number;
  sellingPrice: number;
  userId: number;
}

export interface Cart {
  id: number;
  user: User;
  cartItems: CartItem[];
  totalSellingPrice: number;
  totalItem: number;
  totalMrpPrice: number;
  discount: number;
  couponCode: string | null;
}


# in src/types/couponTypes.ts

import { Cart } from "./cartTypes";

export interface Coupon {
  id: number;
  code: string;
  discountPercentage: number;
  validityStartDate: string;
  validityEndDate: string;
  minimumOrderValue: number;
  active: boolean;
}

export interface CouponState {
  coupons: Coupon[];
  cart: Cart | null;
  loading: boolean;
  error: string | null;
  couponCreated: boolean;
  couponApplied: boolean;
}


# in src/Util/sumCartItemMrpPrice.ts

import { CartItem } from "../types/cartTypes";

export const sumCartItemMrpPrice = (cartItems: CartItem[]) => {
  return cartItems.reduce(
    (acc, item) => acc + item.mrpPrice * item.quantity,
    0
  );
};

export const sumCartItemSellingPrice = (cartItems: CartItem[]) => {
  return cartItems.reduce(
    (acc, item) => acc + item.sellingPrice * item.quantity,
    0
  );
};


# then create the Slice reducer for coupon
# in src/State/customer/couponSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../types/cartTypes";
import { api } from "../../config/Api";
import { CouponState } from "../../types/couponTypes";

const API_URL = "/api/coupons";

export const applyCoupon = createAsyncThunk<
  Cart,
  {
    apply: string;
    code: string;
    orderValue: number;
    jwt: string;
  },
  { rejectValue: string }
>(
  "coupon/applyCoupon",
  async ({ apply, code, orderValue, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.post(`${API_URL}/apply`, null, {
        params: { apply, code, orderValue },
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("apply coupon ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error);
      return rejectWithValue(
        error.response?.data.error || "Failed to apply coupon"
      );
    }
  }
);

const initialState: CouponState = {
  coupons: [],
  cart: null,
  loading: false,
  error: null,
  couponCreated: false,
  couponApplied: false,
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(applyCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.couponApplied = false;
      })
      .addCase(applyCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;

        if (action.meta.arg.apply == "true") {
          state.couponApplied = true;
        }
      })
      .addCase(
        applyCoupon.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || "Failed to apply coupon";
          state.couponApplied = false;
        }
      );
  },
});

export default couponSlice.reducer;


# then slice reducer for cart
# in src/State/customer/cartSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartItem } from "../../types/cartTypes";
import { api } from "../../config/Api";
import {
  sumCartItemMrpPrice,
  sumCartItemSellingPrice,
} from "../../Util/sumCartItemMrpPrice";
import { applyCoupon } from "./couponSlice";

interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cart: null,
  loading: false,
  error: null,
};

const API_URL = "/api/cart";

export const fetchUserCart = createAsyncThunk<Cart, string>(
  "cart/fetchUserCart",
  async (jwt: string, { rejectWithValue }) => {
    try {
      const response = await api.get(API_URL, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Cart fetched ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue("Failed to fetch user cart");
    }
  }
);

interface AddItemRequest {
  productId: number | undefined;
  size: string;
  quantity: number;
}

export const addItemToCart = createAsyncThunk<
  CartItem,
  { jwt: string | null; request: AddItemRequest }
>("cart/addItemToCart", async ({ jwt, request }, { rejectWithValue }) => {
  try {
    const response = await api.put(`${API_URL}/add`, request, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    console.log("Cart added ", response.data);
    return response.data;
  } catch (error: any) {
    console.log("error ", error.response);
    return rejectWithValue("Failed to add item to cart");
  }
});

export const deleteCartItem = createAsyncThunk<
  any,
  { jwt: string; cartItemId: number }
>("cart/deleteCartItem", async ({ jwt, cartItemId }, { rejectWithValue }) => {
  try {
    const response = await api.delete(`${API_URL}/item/${cartItemId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response.data.message || "Failed to delete item to cart"
    );
  }
});

export const updateCartItem = createAsyncThunk<
  any,
  { jwt: string | null; cartItemId: number; cartItem: any }
>(
  "cart/updateCartItem",
  async ({ jwt, cartItemId, cartItem }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `${API_URL}/item/${cartItemId}`,
        cartItem,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || "Failed to update cart items"
      );
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCartState: (state) => {
      state.cart = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserCart.fulfilled,
        (state, action: PayloadAction<Cart>) => {
          state.cart = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(addItemToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addItemToCart.fulfilled,
        (state, action: PayloadAction<CartItem>) => {
          if (state.cart) {
            state.cart.cartItems.push(action.payload);
          }
          state.loading = false;
        }
      )
      .addCase(addItemToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(deleteCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        if (state.cart) {
          state.cart.cartItems = state.cart.cartItems.filter(
            (item: CartItem) => item.id !== action.meta.arg.cartItemId
          );
          const mrpPrice = sumCartItemMrpPrice(state.cart?.cartItems || []);
          const sellingPrice = sumCartItemSellingPrice(
            state.cart?.cartItems || []
          );
          state.cart.totalSellingPrice = sellingPrice;
          state.cart.totalMrpPrice = mrpPrice;
        }

        state.loading = false;
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(updateCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        if (state.cart) {
          const index = state.cart.cartItems.findIndex(
            (item: CartItem) => item.id !== action.meta.arg.cartItemId
          );
          if (index !== -1) {
            state.cart.cartItems[index] = {
              ...state.cart.cartItems[index],
              ...action.payload,
            };
          }
          const mrpPrice = sumCartItemMrpPrice(state.cart?.cartItems || []);
          const sellingPrice = sumCartItemSellingPrice(
            state.cart?.cartItems || []
          );
          state.cart.totalSellingPrice = sellingPrice;
          state.cart.totalMrpPrice = mrpPrice;
        }
        state.loading = false;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(applyCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      });
  },
});

export default cartSlice.reducer;
export const { resetCartState } = cartSlice.actions;


# then call the cart slice in the store
# src/State/Store.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";
import productSlice from "./customer/ProductSlice";
import authSlice from "./AuthSlice";
import cartSlice from "./customer/cartSlice";

const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
  auth: authSlice,
  cart: cartSlice,
});


# then render it to FE UI using redux
# in src/customer/pages/Cart/Cart.tsx

import { Close, LocalOffer } from "@mui/icons-material";
import CartItemCard from "./CartItemCard";
import { orange } from "@mui/material/colors";
import { Button, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PricingCard from "./PricingCard";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchUserCart } from "../../../State/customer/cartSlice";

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((store) => store);

  const handleChange = (e: any) => {
    setCouponCode(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchUserCart(localStorage.getItem("jwt") || ""));
  }, []);

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="cartItemSection lg:col-span-2 space-y-3">
          {cart.cart?.cartItems.map((item) => (
            <CartItemCard item={item} />
          ))}
        </div>


# then in src/customer/pages/Cart/CartItem.tsx
# rename this cause we have a conflict, the name will be CartItemCard.tsx
update all the imports from it

import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import { CartItem } from "../../../types/cartTypes";

const CartItemCard = ({ item }: { item: CartItem }) => {
  const handleUpdateQuantity = () => {};

  return (
    <div className="border border-gray-300 rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src={item.product.images[0]}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">
            {item.product.seller?.businessDetails.businessName}
          </h1>
          <p className="text-gray-600 font-medium text-sm">
            {item.product.title}
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Sold by: </strong>
            Juan Graphico
          </p>
          <p className="text-sm">7 days replacement available</p>
          <p className="text-sm text-gray-500">
            <strong>Quantity:</strong> {item.quantity}
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button disabled={true} onClick={handleUpdateQuantity}>
              <Remove />
            </Button>
            <span>{5}</span>
            <Button onClick={handleUpdateQuantity}>
              <Add />
            </Button>
          </div>
        </div>
        <div className="pr-5">
          <p className="text-gray-700 font-medium">₱ {item.sellingPrice}</p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton>
          <Close color="primary" />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItemCard;


# then as you can see our cart now rendered the static data

# NEXT LETS EMPLEMENT THE BUTTON FOR INCREASING PRODUCT IN CART

# BIG ERROR ON INCREMENTING QUANTITY IN CART
1:06:35

# ORIGINAL CODE FROM VIDEO CARTITEMCARD.TSX
import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import { CartItem } from "../../../types/cartTypes";
import { useAppDispatch } from "../../../State/Store";
import { updateCartItem } from "../../../State/customer/cartSlice";

const CartItemCard = ({ item }: { item: CartItem }) => {
  const dispatch = useAppDispatch();

  const handleUpdateQuantity = (value: number) => () => {
    dispatch(
      updateCartItem({
        jwt: localStorage.getItem("jwt"),
        cartItemId: item.id,
        cartItem: { quantity: item.quantity + value },
      })
    );
  };

  return (
    <div className="border border-gray-300 rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src={item.product.images[0]}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">
            {item.product.seller?.businessDetails.businessName}
          </h1>
          <p className="text-gray-600 font-medium text-sm">
            {item.product.title}
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Sold by: </strong>
            Juan Graphico
          </p>
          <p className="text-sm">7 days replacement available</p>
          <p className="text-sm text-gray-500">
            <strong>Quantity:</strong> {item.quantity}
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button onClick={handleUpdateQuantity(-1)} disabled={true}>
              <Remove />
            </Button>
            <span>{item.quantity}</span>
            <Button onClick={handleUpdateQuantity(1)}>
              <Add />
            </Button>
          </div>
        </div>
        <div className="pr-5">
          <p className="text-gray-700 font-medium">₱ {item.sellingPrice}</p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton>
          <Close color="primary" />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItemCard;


# I UPDATED FROM COPILOT

import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import { CartItem } from "../../../types/cartTypes";
import { useAppDispatch } from "../../../State/Store";
import { updateCartItem } from "../../../State/customer/cartSlice";
import { useState } from "react";

const CartItemCard = ({ item }: { item: CartItem }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleUpdateQuantity = (value: number) => () => {
    const newQuantity = quantity + value;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      dispatch(
        updateCartItem({
          jwt: localStorage.getItem("jwt"),
          cartItemId: item.id,
          cartItem: { quantity: newQuantity },
        })
      );
    }
  };

  return (
    <div className="border border-gray-300 rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src={item.product.images[0]}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">
            {item.product.seller?.businessDetails.businessName}
          </h1>
          <p className="text-gray-600 font-medium text-sm">
            {item.product.title}
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Sold by: </strong>
            Juan Graphico
          </p>
          <p className="text-sm">7 days replacement available</p>
          <p className="text-sm text-gray-500">
            <strong>Quantity:</strong> {quantity}
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button onClick={handleUpdateQuantity(-1)} disabled={quantity <= 0}>
              <Remove />
            </Button>
            <span>{quantity}</span>
            <Button onClick={handleUpdateQuantity(1)}>
              <Add />
            </Button>
          </div>
        </div>
        <div className="pr-5">
          <p className="text-gray-700 font-medium">
            ₱ {item.sellingPrice * quantity}
          </p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton>
          <Close color="primary" />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItemCard;


# 1:06:35

# NOW LETS GO TO "BUY NOW" WHEN A USER PRESS IT, IT WILL CREATE A ORDER

# create the typescript safety in src/types/orderTypes.ts

import { Product } from "./ProductTypes";
import { Address, User } from "./userTypes";

export interface OrderState {
  orders: Order[];
  orderItem: OrderItem | null;
  currentOrder: Order | null;
  paymentOrder: any | null;
  loading: boolean;
  error: string | null;
  orderCanceled: boolean;
}

export interface Order {
  id: number;
  orderId: string;
  user: User;
  sellerId: number;
  orderItems: OrderItem[];
  orderDate: string;
  shippingAddress: Address;
  paymentDetails: any;
  totalMrpPrice: number;
  totalSellingPrice?: number;
  discount?: number;
  orderStatus: OrderStatus;
  totalItem: number;
  deliverDate: string;
}

export enum OrderStatus {
  PENDING = "PENDING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export interface OrderItem {
  id: number;
  order: Order;
  product: Product;
  size: string;
  quantity: number;
  mrpPrice: number;
  sellingPrice: number;
  userId: number;
}


# create the slice and reducer for order checkout
# in src/State/customer/orderSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderItem, OrderState } from "../../types/orderTypes";
import { api } from "../../config/Api";
import { Address } from "../../types/userTypes";
import axios from "axios";

const initialState: OrderState = {
  orders: [],
  orderItem: null,
  currentOrder: null,
  paymentOrder: null,
  loading: false,
  error: null,
  orderCanceled: false,
};

const API_URL = "/api/orders";

export const fetchUserOrderHistory = createAsyncThunk<Order[], string>(
  "orders/fetchUserOrderHistory",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("order history fetched ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue(
        error.response.data.error || "Failed to fetch order history"
      );
    }
  }
);

export const fetchOrderById = createAsyncThunk<
  Order,
  { orderId: number; jwt: string }
>("orders/fetchOrderById", async ({ orderId, jwt }, { rejectWithValue }) => {
  try {
    const response = await api.get(`${API_URL}/${orderId}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    console.log("order fetched ", response.data);
    return response.data;
  } catch (error: any) {
    console.log("error ", error.response);
    return rejectWithValue("Failed to fetch order");
  }
});

export const createOrder = createAsyncThunk<
  any,
  { address: Address; jwt: string; paymentGateway: string }
>(
  "orders/createOrder",
  async ({ address, jwt, paymentGateway }, { rejectWithValue }) => {
    console.log("payment gateway- - - ", paymentGateway);
    try {
      const response = await api.post(API_URL, address, {
        headers: { Authorization: `Bearer ${jwt}` },
        params: { paymentMethod: paymentGateway },
      });
      console.log("order created ", response.data);
      if (response.data.payment_link_url) {
        window.location.href = response.data.payment_link_url;
      }

      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue("Failed to create order");
    }
  }
);

export const fetchOrderItemById = createAsyncThunk<
  OrderItem,
  { orderItemId: number; jwt: string }
>(
  "orders/fetchOrderItemById",
  async ({ orderItemId, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/item/${orderItemId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("order item fetched ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue("Failed to create order");
    }
  }
);

export const paymentSuccess = createAsyncThunk<
  any,
  { paymentId: string; jwt: string; paymentLinkId: string },
  { rejectValue: string }
>(
  "orders/paymentSuccess",
  async ({ paymentId, jwt, paymentLinkId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/payment/${paymentId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
        params: { paymentLinkId },
      });

      console.log("payment success ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("Failed to process payment");
    }
  }
);

export const cancelOrder = createAsyncThunk<Order, any>(
  "orders/cancelOrder",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `${API_URL}/${orderId}/cancel`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
        }
      );
      console.log("cancel order ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("An error occured while cancelling the order.");
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserOrderHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.orderCanceled = false;
      })
      .addCase(
        fetchUserOrderHistory.fulfilled,
        (state, action: PayloadAction<Order[]>) => {
          state.orders = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchUserOrderHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(fetchOrderById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchOrderById.fulfilled,
        (state, action: PayloadAction<Order>) => {
          state.currentOrder = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action: PayloadAction<any>) => {
        state.paymentOrder = action.payload;
        state.loading = false;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(fetchOrderItemById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderItemById.fulfilled, (state, action) => {
        state.loading = false;
        state.orderItem = action.payload;
      })
      .addCase(fetchOrderItemById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(paymentSuccess.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(paymentSuccess.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Payment successful:", action.payload);
      })
      .addCase(paymentSuccess.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(cancelOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.orderCanceled = false;
      })
      .addCase(cancelOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order
        );
        state.orderCanceled = true;
        state.currentOrder = action.payload;
      })
      .addCase(cancelOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default orderSlice.reducer;


# then call the reducer in src/State/Store.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";
import productSlice from "./customer/ProductSlice";
import authSlice from "./AuthSlice";
import cartSlice from "./customer/cartSlice";
import orderSlice from "./customer/orderSlice";

const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
  auth: authSlice,
  cart: cartSlice,
  order: orderSlice,
});


# then in Checkout.tsx

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm paymentGateway={paymentGateway} />
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;


# then on AddressForm.tsx

import { Box, Button, Grid2, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../State/Store";
import { createOrder } from "../../../State/customer/orderSlice";

const AddressFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{10}$/, "Invalid mobile number"),
  pinCode: Yup.string()
    .required("Zip code is required")
    .matches(/^[1-9][0-9]{5}$/, "Invalid pin code"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  locality: Yup.string().required("Locality is required"),
});


const AddressForm = ({ paymentGateway }: any) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      pinCode: "",
      address: "",
      city: "",
      state: "",
      locality: "",
    },
    validationSchema: AddressFormSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        createOrder({
          address: values,
          jwt: localStorage.getItem("jwt") || "",
          paymentGateway: paymentGateway,
        })
      );
    },
  });

  return (


# 1:06:56 => JAVA BE PAYMENT METHOD REDO!

# but when we add address we got error on console

# ADDED PAYPAL AND STRIPE PAYMENT METHOD

# ERROR => sellerSlice.ts:8 
           GET http://localhost:5454/sellers/profile 500 (Internal Server Error)


# ADDED PAYPAL AND STRIPE

# 1:06:58


# PAYPAL SUCCCESS URL => http://localhost:5173/payment-success/54?token=5VP03701R0976881D&PayerID=GKSY27UXFP3T8

# STRIPE SUCCESS URL => http://localhost:5173/payment-success/56

# IM NOT SURE OF THIS CODE

# in App.tsx
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment-success/:orderId"
            element={<PaymentSuccess />}
          />
          <Route path="/become-seller" element={<BecomeSeller />} />


# add file in src/customer/pages/PaymentSuccess.tsx
import { Button } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../State/Store";
import { useEffect } from "react";
import { paymentSuccess } from "../../State/customer/orderSlice";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { orderId } = useParams();
  const getQueryParam = (key: string) => {
    const query = new URLSearchParams(location.search);
    return query.get(key);
  };

  useEffect(() => {
    // Get payment parameters from URL
    const paypalToken = getQueryParam("token");
    const paypalPayerId = getQueryParam("PayerID");
    const stripeSessionId = getQueryParam("session_id");

    const jwt = localStorage.getItem("jwt") || "";

    if (paypalToken && paypalPayerId) {
      // PayPal payment
      dispatch(
        paymentSuccess({
          jwt,
          paymentId: paypalPayerId,
          paymentLinkId: paypalToken,
          paymentMethod: "PAYPAL",
        })
      );
    } else if (stripeSessionId) {
      // Stripe payment
      dispatch(
        paymentSuccess({
          jwt,
          paymentId: stripeSessionId,
          paymentLinkId: orderId || "",
          paymentMethod: "STRIPE",
        })
      );
    } else {
      console.error("No payment parameters found in URL");
    }
  }, [orderId, dispatch, location]);

  return (
    <div className="min-h-[90vh] flex justify-center items-center bg-gradient-to-r from-orange-500 to-purple-600">
      <div className="bg-white text-gray-800 p-10 w-[90%] lg:w-[30%] border rounded-lg shadow-2xl h-[50vh] flex flex-col gap-7 items-center justify-center">
        <h1 className="text-4xl font-bold">Congratulations!</h1>
        <p className="text-xl font-medium text-center">
          Your order has been placed successfully. Thank you for shopping with
          us!
        </p>

        <div>
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={() => navigate("/")}
            style={{ backgroundColor: "#1a73e8", color: "#fff" }}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;


# then in orderSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderItem, OrderState } from "../../types/orderTypes";
import { api } from "../../config/Api";
import { Address } from "../../types/userTypes";
import axios from "axios";

type PaymentMethod = "PAYPAL" | "STRIPE";

---------------------------------------------------------

export const paymentSuccess = createAsyncThunk<
  any,
  {
    paymentId: string;
    jwt: string;
    paymentLinkId: string;
    paymentMethod: PaymentMethod;
  },
  { rejectValue: string }
>(
  "orders/paymentSuccess",
  async (
    { paymentId, jwt, paymentLinkId, paymentMethod },
    { rejectWithValue }
  ) => {
    try {
      let endpoint;

      // Use different endpoints based on payment method
      if (paymentMethod === "PAYPAL") {
        endpoint = `/api/payment/paypal/${paymentId}`;
      } else {
        endpoint = `/api/payment/stripe/${paymentId}`;
      }

      const response = await api.get(endpoint, {
        headers: { Authorization: `Bearer ${jwt}` },
        params: {
          paymentLinkId,
          paymentMethod,
        },
      });

      console.log("payment success ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("Failed to process payment");
    }
  }
);


# NEXT LETS FETCH THE ORDERS

# Orders 1:07:28

# in Orders.tsx edit the code 

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import OrderItem from "./OrderItemCard";
import OrderItemCard from "./OrderItemCard";
import { fetchUserOrderHistory } from "../../../State/customer/orderSlice";

const Orders = () => {
  const dispatch = useAppDispatch();
  const { order } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""));
  }, []);

  return (
    <div className="text-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">All Orders</h1>
        <p>from anytime</p>
      </div>
      <div className="space-y-2">
        {order.orders.map((order) =>
          order.orderItems.map((item) => (
            <OrderItem item={item} order={order} />
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;


# also in OrderItemCard.tsx

import { Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { Order, OrderItem } from "../../../types/orderTypes";
import { useNavigate } from "react-router-dom";

const OrderItemCard = ({ item, order }: { item: OrderItem; order: Order }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/account/order/${order.id}/${item.id}`)}
      className="text-sm bg-white p-5 space-y-4 border border-gray-300 rounded-md cursor-pointer"
    >
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: blue[400] }}>
            <PublishedWithChangesIcon />
          </Avatar>
        </div>

        <div>
          <h1 className="font-bold text-green-600">PENDING</h1>
          <p>Arriving By {order.deliverDate}</p>
        </div>
      </div>
      <div className="p-5 bg-slate-200 flex gap-3">
        <div>
          <img className="w-[70px]" src={item.product.images[0]} alt="" />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">
            {item.product.seller?.businessDetails.businessName}
          </h1>
          <p>{item.product.title}</p>
          <p>
            <strong>size: </strong> FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;


# in OrderDetails.tsx and make it dynamic

import { Payments } from "@mui/icons-material";
import { Box, Button, Divider } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { useEffect } from "react";
import {
  fetchOrderById,
  fetchOrderItemById,
} from "../../../State/customer/orderSlice";

const OrderDetails = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { orderId, orderItemId } = useParams();
  const { order } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(
      fetchOrderById({
        orderId: Number(orderId),
        jwt: localStorage.getItem("jwt") || "",
      })
    );
    dispatch(
      fetchOrderItemById({
        orderItemId: Number(orderItemId),
        jwt: localStorage.getItem("jwt") || "",
      })
    );
  }, []);

  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px]"
          src={order.orderItem?.product.images[0]}
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">
            {order.orderItem?.product.seller?.businessDetails.businessName}
          </h1>
          <p>{order.orderItem?.product.title}</p>
          <p>
            <strong>size: </strong> M
          </p>
        </div>
        <div>
          <Button
            onClick={() => navigate(`/reviews/${5}/create`)}
            className="!bg-orange-500 !text-white !px-4"
          >
            Write Review
          </Button>
        </div>
      </section>

      <section className="border border-gray-300 p-5">
        <OrderStepper orderStatus={"SHIPPED"} />
      </section>
      <div className="border border-gray-300 p-5">
        <h1 className="font-bold pb-3">Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>{order.currentOrder?.shippingAddress.name}</p>
            <Divider flexItem orientation="vertical" />
            <p>{order.currentOrder?.shippingAddress.mobile}</p>
          </div>
          <p>
            {order.currentOrder?.shippingAddress.address}
            {" | "}
            {order.currentOrder?.shippingAddress.state}
            {" | "}
            {order.currentOrder?.shippingAddress.city}
            {" | "}
            {order.currentOrder?.shippingAddress.pinCode}
          </p>
        </div>
      </div>

      <div className="border border-gray-300 space-y-4">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Total Item Price</p>
            <p>
              You saved{" "}
              <span className="text-green-500 font-medium text-xs">
                ₱699.00{" "}
              </span>
              on this item
            </p>
          </div>

          <p className="font-medium">₱ {order.orderItem?.sellingPrice}.00</p>
        </div>

        <div className="px-5">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
            <Payments />
            <p>Pay On Delivery</p>
          </div>
        </div>

        <Divider />

        <div className="px-5 pb-5 pt-2">
          <p className="text-xs">
            <strong>Sold by: </strong>
            {order.orderItem?.product.seller?.businessDetails.businessName}
          </p>
        </div>

        <div className="p-10">
          <Button
            disabled={false}
            color="error"
            sx={{ py: "0.7rem" }}
            className=""
            variant="outlined"
            fullWidth
          >
            {false ? "Order Canceled" : "Cancel Order"}
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetails;


# make dynamic too the UserDetails.tsx

import { Divider } from "@mui/material";
import ProfileFieldCard from "../../../component/ProfileFieldCard";
import { useAppSelector } from "../../../State/Store";

// Utility function to capitalize the first letter
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const UserDetails = () => {
  const { auth } = useAppSelector((store) => store);

  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
        </div>

        <div className="">
          <ProfileFieldCard
            keys="Name"
            value={capitalizeFirstLetter(auth.user?.fullName || "")}
          />
          <Divider />
          <ProfileFieldCard keys="Email" value={auth.user?.email || ""} />
          <Divider />
          <ProfileFieldCard
            keys="Mobile"
            value={auth.user?.mobile || "0989561463"}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;


# next well be the wishlist lets implement it

# in App.tsx

   <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route

# then create the folder in src/customer/Wishlist/Wishlist.tsx

import WishlistProductCard from "./WishlistProductCard";

const Wishlist = () => {
  return (
    <div className="h-[85vh] p-5 lg:p-20">
      <section>
        <h1>
          <strong>My Wishlist</strong> 5 items
        </h1>

        <div className="pt-10 flex flex-wrap gap-5">
          {[1, 1, 1, 1, 1].map((item) => (
            <WishlistProductCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;

# src/customer/Wishlist/WishlistProductCard.tsx

const WishlistProductCard = () => {
  return <div>WishlistProductCard</div>;
};

export default WishlistProductCard;

# then create types in src/types/wishlistTypes.ts

import { Product } from "./ProductTypes";
import { User } from "./userTypes";

export interface Wishlist {
  id: number;
  user: User;
  products: Product[];
}

export interface WishlistState {
  wishlist: Wishlist | null;
  loading: boolean;
  error: string | null;
}

// Payload interfaces for async thunks
export interface AddProductToWishlistPayload {
  wishlistId: number;
  productId: number;
}


# create slice redux to it, in src/State/customer/wishlistSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Wishlist, WishlistState } from "../../types/wishlistTypes";
import { api } from "../../config/Api";

const initialState: WishlistState = {
  wishlist: null,
  loading: false,
  error: null,
};

export const getWishlistByUserId = createAsyncThunk(
  "wishlist/getWishlistByUserId",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/wishlist`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("wishlist fetch ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error);
      return rejectWithValue(
        error.response?.data.message || "Failed to fetch wishlist"
      );
    }
  }
);

export const addProductToWishlist = createAsyncThunk(
  "wishlist/addProductToWishlist",
  async ({ productId }: { productId: number }, { rejectWithValue }) => {
    try {
      const response = await api.post(
        `/api/wishlist/add-product/${productId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      console.log("add product ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error);
      return rejectWithValue(
        error.response?.data.message || "Failed adding product to wishlist"
      );
    }
  }
);

// Slice
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    resetWishlistState: (state) => {
      state.wishlist = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //   getWishlistByUserId
    builder.addCase(getWishlistByUserId.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getWishlistByUserId.fulfilled,
      (state, action: PayloadAction<Wishlist>) => {
        state.wishlist = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(
      getWishlistByUserId.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );

    // addProductToWishlist
    builder.addCase(addProductToWishlist.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      addProductToWishlist.fulfilled,
      (state, action: PayloadAction<Wishlist>) => {
        state.wishlist = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(
      addProductToWishlist.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { resetWishlistState } = wishlistSlice.actions;

export default wishlistSlice.reducer;


# then call it on Store, src/State/Store.ts

import cartSlice from "./customer/cartSlice";
import orderSlice from "./customer/orderSlice";
import wishlistSlice from "./customer/wishlistSlice";

const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
  auth: authSlice,
  cart: cartSlice,
  order: orderSlice,
  wishlist: wishlistSlice,
});


# then back to Wishlist.tsx used the new state slice reducer

import { useEffect } from "react";
import { useAppDispatch } from "../../State/Store";
import WishlistProductCard from "./WishlistProductCard";
import { getWishlistByUserId } from "../../State/customer/wishlistSlice";

const Wishlist = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWishlistByUserId());
  }, []);

  return (


# then in browser wishlist page check the console if it fetched the wishlist

# then add more code in Wishlist.tsx to add the wishlist product on the page not jsut on the console

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../State/Store";
import WishlistProductCard from "./WishlistProductCard";
import { getWishlistByUserId } from "../../State/customer/wishlistSlice";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const { wishlist } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(getWishlistByUserId());
  }, []);

  return (
    <div className="h-[85vh] p-5 lg:p-20">
      <section>
        <h1>
          <strong>My Wishlist</strong> 5 items
        </h1>

        <div className="pt-10 flex flex-wrap gap-5">
          {wishlist.wishlist?.products.map((item) => (
            <WishlistProductCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;


# then implement the function to ProductCard.tsx

import { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { Product } from "../../../types/ProductTypes";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../State/Store";
import { addProductToWishlist } from "../../../State/customer/wishlistSlice";

const ProductCard = ({ item }: { item: Product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    let interval: any;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % item.images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleWishlist = (event: any) => {
    event.stopPropagation();
    item.id && dispatch(addProductToWishlist({ productId: item.id }));
  };

  return (

-------------------------------------------------

          {isHovered && (
            <div className="indicator flex flex-col items-center space-y-2">
              <div className="flex gap-3">
                <Button
                  onClick={handleWishlist}
                  className="!min-w-0 !p-3 !rounded-full !bg-white"
                >
                  <Favorite color="primary" />
                </Button>
                <Button className="!min-w-0 !p



# then implement and update the WishlistProductCard.tsx

import { Close } from "@mui/icons-material";
import { Product } from "../../types/ProductTypes";
import { useAppDispatch } from "../../State/Store";
import { addProductToWishlist } from "../../State/customer/wishlistSlice";

const WishlistProductCard = ({ item }: { item: Product }) => {
  const dispatch = useAppDispatch();

  const handleWishlist = () => {
    item.id && dispatch(addProductToWishlist({ productId: item.id }));
  };
  return (
    <div className="w-60 relative">
      <div className="w-full">
        <img
          src={item.images[0]}
          className="object-cover w-full h-[18rem]"
          alt=""
        />
      </div>
      <div className="pt-3 space-y-1">
        <p>{item.title}</p>
        <div className="price flex items-center gap-3">
          <span className="font-sans text-gray-800">₱ {item.sellingPrice}</span>
          <span className="thin-line-through text-gray-400">
            ₱ {item.mrpPrice}
          </span>
          <span className="text-green-500 font-semibold">
            {item.discountPercent}%
          </span>
        </div>
      </div>

      <div className="absolute top-2 right-2">
        <button onClick={handleWishlist}>
          <Close
            className="cursor-pointer !bg-slate-400 rounded-full p-1 !text-white"
            sx={{ color: "white"[200], fontSize: "2rem" }}
          />
        </button>
      </div>
    </div>
  );
};

export default WishlistProductCard;


# 1:08:08
# THEN NEXT LETS FETCH THE SELLER DASHBOARD


# in src/State/seller/sellerOrderSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderStatus } from "../../types/orderTypes";
import { api } from "../../config/Api";

export const fetchSellerOrders = createAsyncThunk<Order[], string>(
  "sellerOrders/fetchSellerOrders",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/seller/orders", {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      console.log("fetch seller orders", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error", error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateOrderStatus = createAsyncThunk<
  Order,
  { jwt: string; orderId: number; orderStatus: OrderStatus }
>(
  "sellerOrders/updateOrderStatus",
  async ({ jwt, orderId, orderStatus }, { rejectWithValue }) => {
    try {
      const response = await api.patch(
        `/api/seller/orders/${orderId}/status/${orderStatus}`,
        null,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );

      console.log("order status updated", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error", error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteOrder = createAsyncThunk<
  any,
  { jwt: string; orderId: number }
>("sellerOrders/deleteOrder", async ({ jwt, orderId }, { rejectWithValue }) => {
  try {
    const response = await api.delete(`/api/seller/orders/${orderId}/delete`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

interface SellerOrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: SellerOrderState = {
  orders: [],
  loading: false,
  error: null,
};

const sellerOrderSlice = createSlice({
  name: "sellerOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellerOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSellerOrders.fulfilled,
        (state, action: PayloadAction<Order[]>) => {
          state.loading = false;
          state.orders = action.payload;
        }
      )
      .addCase(fetchSellerOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(updateOrderStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateOrderStatus.fulfilled,
        (state, action: PayloadAction<Order>) => {
          state.loading = false;
          const index = state.orders.findIndex(
            (order) => order.id === action.payload.id
          );
          if (index !== -1) {
            state.orders[index] = action.payload;
          }
        }
      )
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(deleteOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.filter(
          (order) => order.id !== action.meta.arg.orderId
        );
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default sellerOrderSlice.reducer;


# then import it to Store.ts

import cartSlice from "./customer/cartSlice";
import orderSlice from "./customer/orderSlice";
import wishlistSlice from "./customer/wishlistSlice";
import sellerOrderSlice from "./seller/sellerOrderSlice";

const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
  auth: authSlice,
  cart: cartSlice,
  order: orderSlice,
  wishlist: wishlistSlice,
  sellerOrder: sellerOrderSlice,
});



# then in OrderTable.tsx

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import React, { useEffect } from "react";
import {
  fetchSellerOrders,
  updateOrderStatus,
} from "../../../State/seller/sellerOrderSlice";
import { Button, Menu, MenuItem } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const orderStatusColor = {
  PENDING: { color: "#FFA500", lable: "PENDING" },
  CONFIRMED: { color: "#F5BCBA", lable: "CONFIRMED" },
  PLACED: { color: "#F5BCBA", lable: "PLACED" },
  SHIPPED: { color: "#1E90FF", lable: "SHIPPED" },
  DELIVERED: { color: "#32CD32", lable: "DELIVERED" },
  CANCELLED: { color: "#FF0000", lable: "CANCELLED" },
};

const orderStatus = [
  { color: "#FFA500", label: "PENDING" },
  { color: "#F5BCBA", label: "PLACED" },
  { color: "#F5BCBA", label: "CONFIRMED" },
  { color: "#1E90FF", label: "SHIPPED" },
  { color: "#32CD32", label: "DELIVERED" },
  { color: "#FF0000", label: "CANCELLED" },
];

export default function OrderTable() {
  const dispatch = useAppDispatch();
  const { sellerOrder } = useAppSelector((store) => store);
  const [anchorEl, setAnchorEl] = React.useState<null | any>({});
  const open = Boolean(anchorEl);
  const handleClick = (event: any, orderId: number) => {
    setAnchorEl((prev: any) => ({ ...prev, [orderId]: event.currentTarget }));
  };
  const handleClose = (orderId: number) => () => {
    setAnchorEl((prev: any) => ({ ...prev, [orderId]: null }));
  };

  useEffect(() => {
    dispatch(fetchSellerOrders(localStorage.getItem("jwt") || ""));
  }, []);

  const handleUpdateOrderStatus = (orderId: number, orderStatus: any) => () => {
    dispatch(
      updateOrderStatus({
        jwt: localStorage.getItem("jwt") || "",
        orderId,
        orderStatus,
      })
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order Id</StyledTableCell>
            <StyledTableCell>Products</StyledTableCell>
            <StyledTableCell align="right">Shipping Address</StyledTableCell>
            <StyledTableCell align="right">Order Status</StyledTableCell>
            <StyledTableCell align="right">Update Order</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerOrder.orders.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.id}
              </StyledTableCell>
              <StyledTableCell>
                <div className="flex gap-1 flex-wrap">
                  {item.orderItems.map((orderItem) => (
                    <div className="flex gap-5">
                      <img
                        src={orderItem.product.images[0]}
                        className="w-20 rounded-md"
                        alt=""
                      />
                      <div className="flex flex-col justify-between py-2">
                        <h1>Title: {orderItem.product.title}</h1>
                        <h1>Selling Price: {orderItem.product.sellingPrice}</h1>
                        <h1>Color: {orderItem.product.color}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div className="flex flex-col gap-y-2">
                  <h1>{item.shippingAddress.name}</h1>
                  <h1>
                    {item.shippingAddress.address}, {item.shippingAddress.city}
                  </h1>
                  <h1>
                    {item.shippingAddress.state} -{" "}
                    {item.shippingAddress.pinCode}
                  </h1>
                  <h1>
                    <strong>Mobile: </strong>
                    {item.shippingAddress.mobile}
                  </h1>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <span className="px-5 py-2 rounded-full text-primary border-primary">
                  {item.orderStatus}
                </span>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  size="small"
                  color="primary"
                  onClick={(e) => handleClick(e, item.id)}
                >
                  Status
                </Button>
                <Menu
                  id={`status-menu ${item.id}`}
                  anchorEl={anchorEl[item.id]}
                  open={Boolean(anchorEl[item.id])}
                  onClose={handleClose(item.id)}
                  MenuListProps={{
                    "aria-labelledby": `status-menu ${item.id}`,
                  }}
                >
                  {orderStatus.map((status) => (
                    <MenuItem
                      key={status.label}
                      onClick={handleUpdateOrderStatus(item.id, status.label)}
                    >
                      {status.label}
                    </MenuItem>
                  ))}
                </Menu>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



# LETS IMPLEMENT THE TRANSACTION 

# in src/State/seller/transactionSlice.ts

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { User } from "../../types/userTypes";
import { Order } from "../../types/orderTypes";
import { Seller } from "../../types/SellerTypes";

export interface Transaction {
  id: number;
  customer: User;
  order: Order;
  seller: Seller;
  date: string;
}

interface TransactionState {
  transactions: Transaction[];
  transaction: Transaction | null;
  loading: boolean;
  error: string | null;
}

const initialState: TransactionState = {
  transactions: [],
  transaction: null,
  loading: false,
  error: null,
};

export const fetchTransactionBySeller = createAsyncThunk<
  Transaction[],
  string,
  { rejectValue: string }
>("transactions/fetchTransactionBySeller", async (jwt, { rejectWithValue }) => {
  try {
    const response = await api.get("/api/transactions/seller", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("fetchTransactionBySeller", response.data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue("Failed to fetch transactions");
  }
});

export const fetchAllTransactions = createAsyncThunk<
  Transaction[],
  void,
  { rejectValue: string }
>("transactions/fetchAllTransactions", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<Transaction[]>("/api/transactions");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue("Failed to fetch all the transactions");
  }
});

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionBySeller.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactionBySeller.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactionBySeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(fetchAllTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchAllTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default transactionSlice.reducer;


# then call in Store.ts

import authSlice from "./AuthSlice";
import cartSlice from "./customer/cartSlice";
import orderSlice from "./customer/orderSlice";
import wishlistSlice from "./customer/wishlistSlice";
import sellerOrderSlice from "./seller/sellerOrderSlice";
import transactionSlice from "./seller/transactionSlice";

const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
  auth: authSlice,
  cart: cartSlice,
  order: orderSlice,
  wishlist: wishlistSlice,
  sellerOrder: sellerOrderSlice,
  transactions: transactionSlice,
});



# then update the Transaction.tsx

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { useEffect } from "react";
import { fetchTransactionBySeller } from "../../../State/seller/transactionSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TransactionTable() {
  const dispatch = useAppDispatch();
  const { transactions } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(fetchTransactionBySeller(localStorage.getItem("jwt") || ""));
  }, []);

  return (
    <>
      <h1 className="font-bold mb-5 text-xl text-gray-500 font-display italic">
        Our Transactions
      </h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell align="right">Customer Details</StyledTableCell>
              <StyledTableCell align="right">Order</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.transactions.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.date}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {item.customer.email}
                </StyledTableCell>
                <StyledTableCell align="right">{item.order.id}</StyledTableCell>
                <StyledTableCell align="right">
                  {item.order.totalSellingPrice}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}



# NEXT LETS EMPLEMENT THE ADMIN PANEL

# Backend SC
# create a new service impl class, this is to set the admin acc on our app
# src/main/java/com/marckodev/service/impl/DataInitializationComponent.java

package com.mackodev.service.impl;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.mackodev.domain.USER_ROLE;
import com.mackodev.modal.User;
import com.mackodev.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class DataInitializationComponent implements CommandLineRunner{
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        initializeAdminUser();
    }

    private void initializeAdminUser() {
        String adminUsername = "marckfriencecoto@gmail.com";

        if (userRepository.findByEmail(adminUsername) == null) {
            User adminUser = new User();

            adminUser.setPassword(passwordEncoder.encode("marckodev"));
            adminUser.setFullName("Marck");
            adminUser.setEmail(adminUsername);
            adminUser.setRole(USER_ROLE.ROLE_ADMIN);

            userRepository.save(adminUser);
        }
    }

}


# then go back to FE

# in src/types/HomeCategoryTypes.ts


export interface HomeData {
  id: number;
  grid: HomeCategory[];
  shopByCategories: HomeCategory[];
  electricCategories: HomeCategory[];
  deals: Deal[];
  dealCategories: HomeCategory[];
}

export interface HomeCategory {
  id?: number;
  categoryId: string;
  section?: string;
  name?: string;
  image: string;
  parentCategoryId?: string;
}


# then create a new slice, src/State/admin/adminSlice.ts

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HomeCategory } from "../../types/HomeCategoryTypes";
import { api } from "../../config/Api";

const API_URL = "/admin";

export const updateHomeCategory = createAsyncThunk<
  HomeCategory,
  { id: number; data: HomeCategory }
>(
  "homeCategory/updateHomeCategory",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`${API_URL}/home-category/${id}`, data);
      console.log(" category updated", response);
      return response.data;
    } catch (error: any) {
      console.log("error ", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An error occured while updating the category.");
      }
    }
  }
);

export const fetchHomeCategories = createAsyncThunk<HomeCategory[]>(
  "homeCategory/fetchHomeCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/home-category`);
      console.log(" categories", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch categories"
      );
    }
  }
);

interface HomeCategoryState {
  categories: HomeCategory[];
  loading: boolean;
  error: string | null;
  categoryUpdated: boolean;
}

const initialState: HomeCategoryState = {
  categories: [],
  loading: false,
  error: null,
  categoryUpdated: false,
};

const homeCategorySlice = createSlice({
  name: "homeCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateHomeCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.categoryUpdated = false;
    });
    builder.addCase(updateHomeCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryUpdated = true;
      const index = state.categories.findIndex(
        (category) => category.id === action.payload.id
      );
      if (index !== -1) {
        state.categories[index] = action.payload;
      } else {
        state.categories.push(action.payload);
      }
    });
    builder.addCase(updateHomeCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder
      .addCase(fetchHomeCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.categoryUpdated = false;
      })
      .addCase(fetchHomeCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchHomeCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


# then in AdminDashboard.tsx

import AdminDrawerList from "../../components/AdminDrawerList";
import { fetchHomeCategories } from "../../../State/admin/adminSlice";

const AdminDashboard = () => {
  const toggleDrawer = () => {};
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHomeCategories());
  }, []);

  return (




# IN FE
# src/State/customer/customerSlice.ts

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HomeCategory, HomeData } from "../../types/HomeCategoryTypes";
import { api } from "../../config/Api";

export const createHomeCategories = createAsyncThunk<HomeData, HomeCategory[]>(
  "home/createHomeCategories",
  async (homeCategories, { rejectWithValue }) => {
    try {
      const response = await api.post("/home/categories", homeCategories);
      console.log(" home categories ", response.data);
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to create home categories";
      console.log("err ", errorMessage, error);
      return rejectWithValue(errorMessage);
    }
  }
);

interface HomeState {
  homePageData: HomeData | null;
  homeCategories: HomeCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: HomeState = {
  homePageData: null,
  homeCategories: [],
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createHomeCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createHomeCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageData = action.payload;
    });
    builder.addCase(createHomeCategories.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as string) || "Failed to create home categories";
    });
  },
});

export default homeSlice.reducer;


# src/data/HomeCategories.ts

export const homeCategories = [
  // ELECTRIC_CATEGORIES SECTION
  {
    categoryId: "gaming_laptops",
    section: "ELECTRIC_CATEGORIES",
    name: "Gaming Laptop",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/9/j/-original-image.jpg",
  },
  {
    categoryId: "mobiles",
    section: "ELECTRIC_CATEGORIES",
    name: "Mobile",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/t/j/edge-50-fusion.jpg",
  },
  {
    categoryId: "smart_watches",
    section: "ELECTRIC_CATEGORIES",
    name: "Smartwatch",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch.jpg",
  },
  {
    categoryId: "headphones",
    section: "ELECTRIC_CATEGORIES",
    name: "Headphones",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone.jpg",
  },
  {
    categoryId: "smart_speakers",
    section: "ELECTRIC_CATEGORIES",
    name: "Smart Speakers",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/speaker.jpg",
  },
  {
    categoryId: "smart_home_devices",
    section: "ELECTRIC_CATEGORIES",
    name: "Smart Home Devices",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/smart-home-device.jpg",
  },
  {
    categoryId: "tablets",
    section: "ELECTRIC_CATEGORIES",
    name: "Tablets",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/tablet.jpg",
  },
  {
    categoryId: "power_banks",
    section: "ELECTRIC_CATEGORIES",
    name: "Power Banks",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/power-bank.jpg",
  },
  {
    categoryId: "cameras",
    section: "ELECTRIC_CATEGORIES",
    name: "Cameras",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/camera.jpg",
  },
  {
    categoryId: "laptops",
    section: "ELECTRIC_CATEGORIES",
    name: "Laptops",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/laptop.jpg",
  },

  // GRID SECTION
  {
    categoryId: "men_formal_shoes",
    section: "GRID",
    name: "Men Formal Shoes",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/men_formal_shoes.jpg",
  },
  {
    categoryId: "women_lehenga_cholis",
    section: "GRID",
    name: "Women Lehenga Cholis",
    image: "https://images.pexels.com/photos/12730873.jpeg",
  },
  {
    categoryId: "men_sherwanis",
    section: "GRID",
    name: "Men Sherwanis",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/men_sherwanis.jpg",
  },
  {
    categoryId: "women_kurtis",
    section: "GRID",
    name: "Women Kurtis",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/women_kurtis.jpg",
  },
  {
    categoryId: "men_casual_shoes",
    section: "GRID",
    name: "Men Casual Shoes",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/men_casual_shoes.jpg",
  },
  {
    categoryId: "women_dresses",
    section: "GRID",
    name: "Women Dresses",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/women_dresses.jpg",
  },
  {
    categoryId: "kids_clothing",
    section: "GRID",
    name: "Kids Clothing",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/kids_clothing.jpg",
  },
  {
    categoryId: "sports_shoes",
    section: "GRID",
    name: "Sports Shoes",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/sports_shoes.jpg",
  },
  {
    categoryId: "winter_wear",
    section: "GRID",
    name: "Winter Wear",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/winter_wear.jpg",
  },
  {
    categoryId: "summer_wear",
    section: "GRID",
    name: "Summer Wear",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/summer_wear.jpg",
  },

  // SHOP_BY_CATEGORIES SECTION
  {
    categoryId: "home_decor",
    parentCategoryId: "men",
    section: "SHOP_BY_CATEGORIES",
    name: "Home Décor",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/home_decor.jpg",
  },
  {
    categoryId: "kitchen_table",
    parentCategoryId: "men",
    section: "SHOP_BY_CATEGORIES",
    name: "Kitchen & Table",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/kitchen_table.jpg",
  },
  {
    categoryId: "furniture",
    parentCategoryId: "men",
    section: "SHOP_BY_CATEGORIES",
    name: "Furniture",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/furniture.jpg",
  },
  {
    categoryId: "lighting",
    parentCategoryId: "men",
    section: "SHOP_BY_CATEGORIES",
    name: "Lighting",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/lighting.jpg",
  },
  {
    categoryId: "storage_solutions",
    parentCategoryId: "men",
    section: "SHOP_BY_CATEGORIES",
    name: "Storage Solutions",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/storage_solutions.jpg",
  },
  {
    categoryId: "wall_art",
    parentCategoryId: "men",
    section: "SHOP_BY_CATEGORIES",
    name: "Wall Art",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/wall_art.jpg",
  },
  {
    categoryId: "rugs_carpets",
    parentCategoryId: "men",
    section: "SHOP_BY_CATEGORIES",
    name: "Rugs & Carpets",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/rugs_carpets.jpg",
  },
  {
    categoryId: "curtains_blinds",
    parentCategoryId: "men",
    section: "SHOP_BY_CATEGORIES",
    name: "Curtains & Blinds",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/curtains_blinds.jpg",
  },
  {
    categoryId: "bedding",
    parentCategoryId: "men",
    section: "SHOP_BY_CATEGORIES",
    name: "Bedding",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/bedding.jpg",
  },
  {
    categoryId: "bathroom_accessories",
    parentCategoryId: "men",
    section: "SHOP_BY_CATEGORIES",
    name: "Bathroom Accessories",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/bathroom_accessories.jpg",
  },

  // DEALS SECTION
  {
    categoryId: "women_sarees",
    section: "DEALS",
    name: "Women Saree",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari.jpg",
  },
  {
    categoryId: "smart_watches_deal",
    section: "DEALS",
    name: "Smart Watches",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch.jpg",
  },
  {
    categoryId: "men_festive_wear",
    section: "DEALS",
    name: "Men Festive Wear",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set.jpg",
  },
  {
    categoryId: "home_appliances_deal",
    section: "DEALS",
    name: "Home Appliances",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/home-appliance.jpg",
  },
  {
    categoryId: "electronics_deal",
    section: "DEALS",
    name: "Electronics",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/electronics.jpg",
  },
  {
    categoryId: "fashion_accessories_deal",
    section: "DEALS",
    name: "Fashion Accessories",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/fashion-accessory.jpg",
  },
  {
    categoryId: "beauty_products_deal",
    section: "DEALS",
    name: "Beauty Products",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/beauty-product.jpg",
  },
  {
    categoryId: "grocery_deal",
    section: "DEALS",
    name: "Grocery",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/grocery.jpg",
  },
  {
    categoryId: "toys_games_deal",
    section: "DEALS",
    name: "Toys & Games",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/toy-game.jpg",
  },
  {
    categoryId: "books_stationery_deal",
    section: "DEALS",
    name: "Books & Stationery",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/book-stationery.jpg",
  },

  // ADDITIONAL CATEGORIES TO REACH 250 LINES
  // Repeat similar entries with unique `categoryId`, `name`, and `image` URLs.
];



# then in App.tsx

import Wishlist from "./customer/Wishlist/Wishlist";
import { createHomeCategories } from "./State/customer/customerSlice";
import { homeCategories } from "./data/HomeCategories";

const App = () => {
  const dispatch = useAppDispatch();
  const { seller, auth } = useAppSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
    dispatch(createHomeCategories(homeCategories));
  }, []);



# in Store.ts

import sellerOrderSlice from "./seller/sellerOrderSlice";
import transactionSlice from "./seller/transactionSlice";
import adminSlice from "./admin/adminSlice";
import customerSlice from "./customer/customerSlice";

const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
  auth: authSlice,
  cart: cartSlice,
  order: orderSlice,
  wishlist: wishlistSlice,
  customer: customerSlice,

  sellerOrder: sellerOrderSlice,
  transactions: transactionSlice,

  admin: adminSlice,
});


# THEN GOTO ElectricCategory.tsx

import { useAppSelector } from "../../../../State/Store";
import ElectricCategoryCard from "./ElectricCategoryCard";

const ElectricCategory = () => {
  const { customer } = useAppSelector((store) => store);

  return (
    <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b border-b-slate-200">
      {customer.homePageData?.electricCategories.slice(0, 7).map((item) => (
        <ElectricCategoryCard item={item} />
      ))}
    </div>
  );
};

export default ElectricCategory;



# also in ElectricCategoryCard.tsx

import { HomeCategory } from "../../../../types/HomeCategoryTypes";

const ElectricCategoryCard = ({ item }: { item: HomeCategory }) => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <img className="object-contain h-10" src={item.image} alt="" />
      <h2 className="font-semibold text-sm text-center">{item.name}</h2>
    </div>
  );
};

export default ElectricCategoryCard;


# THEN NEXT IS DEAL
# in Deal.tsx

import DealCard from "./DealCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useAppSelector } from "../../../../State/Store";

const Deal = () => {
  const { customer } = useAppSelector((store) => store);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
  };

  return (
    <div className="py-5 lg:px-20">
      <div className="flex items-center justify-between">
        {customer.homePageData?.deals.slice(0, 6).map((item) => (
          <DealCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Deal;


# then in DealCard.tsx

import { Deal } from "../../../../types/dealTypes";

const DealCard = ({ item }: { item: Deal }) => {
  return (
    <div className="w-[13rem] cursor-pointer">
      <img
        className="border-x-[7px] border-t-[7px] border-violet-500 w-full h-[12rem] object-cover object-top"
        src={item.category.image}
        alt=""
      />
      <div className="border-4 border-black bg-black text-white p-2 text-center">
        <p className="text-lg font-semibold">{item.category.name}</p>
        <p className="text-2xl font-bold">{item.discount}% OFF</p>
        <p className="text-balance text-lg">Shop Now</p>
      </div>
    </div>
  );
};

export default DealCard;


# THEN MAKE THE ShopByCategory.tsx dynamic

import { useAppSelector } from "../../../../State/Store";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
  const { customer } = useAppSelector((store) => store);

  return (
    <div className="flex flex-wrap justify-between lg:px-20 gap-7">
      {customer.homePageData?.shopByCategories.map((item) => (
        <ShopByCategoryCard item={item} />
      ))}
    </div>
  );
};

export default ShopByCategory;


# in ShopByCategoryCard.tsx

import { HomeCategory } from "../../../../types/HomeCategoryTypes";
import "./ShopByCategory.css";

const ShopByCategoryCard = ({ item }: { item: HomeCategory }) => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
      <div className="custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-tertiary">
        <img
          className="rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
          src={item.image}
          alt=""
        />
      </div>
      <h1>{item.name}</h1>
    </div>
  );
};

export default ShopByCategoryCard;



# NOW LETS MAKE THE ADMIN DASHBOARD dynamic

# in ShopByCategoryTable.tsx

import { useAppSelector } from "../../../State/Store";
import HomeCategoryTable from "./HomeCategoryTable";

const ShopByCategoryTable = () => {
  const { customer } = useAppSelector((store) => store);

  return (
    <div>
      <HomeCategoryTable data={customer.homePageData?.shopByCategories || []} />
    </div>
  );
};

export default ShopByCategoryTable;


# in HomeCategoryTable.tsx


export default function HomeCategoryTable({ data }: { data: HomeCategory[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((category, index) => (
            <StyledTableRow key={category.id}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell>{category.id}</StyledTableCell>
              <StyledTableCell>
                <img src={category.image} className="w-20 rounded-md" alt="" />
              </StyledTableCell>
              <StyledTableCell align="right">
                {category.categoryId}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button>
                  <DriveFileRenameOutlineIcon />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



# in GridTable.tsx

import { useAppSelector } from "../../../State/Store";
import HomeCategoryTable from "./HomeCategoryTable";

const GridTable = () => {
  const { customer } = useAppSelector((store) => store);

  return (
    <div>
      <HomeCategoryTable data={customer.homePageData?.grid || []} />
    </div>
  );
};

export default GridTable;


# ElectronicTable.tsx

import { useAppSelector } from "../../../State/Store";
import HomeCategoryTable from "./HomeCategoryTable";

const ElectronicTable = () => {
  const { customer } = useAppSelector((store) => store);

  return (
    <div>
      <HomeCategoryTable
        data={customer.homePageData?.electricCategories || []}
      />
    </div>
  );
};

export default ElectronicTable;



# DealCategoryTable.tsx

import { useAppSelector } from "../../../State/Store";
import HomeCategoryTable from "./HomeCategoryTable";

const DealCategoryTable = () => {
  const { customer } = useAppSelector((store) => store);

  return (
    <div>
      <HomeCategoryTable data={customer.homePageData?.dealCategories || []} />
    </div>
  );
};

export default DealCategoryTable;



# create src/State/admin/DealSlice.ts

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DealsState } from "../../types/dealTypes";
import { api } from "../../config/Api";

const initialState: DealsState = {
  deals: [],
  loading: false,
  error: null,
  dealCreated: false,
  dealUpdated: false,
};

export const createDeal = createAsyncThunk(
  "deals/createDeal",
  async (deal: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/admin/deals", deal, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("created deal", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to create deal"
      );
    }
  }
);

export const getAllDeals = createAsyncThunk(
  "deals/getAllDeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/admin/deals", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("get all deals", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to get all deals"
      );
    }
  }
);

export const updateDeal = createAsyncThunk(
  "deals/updateDeal",
  async (deal: any, { rejectWithValue }) => {
    try {
      const response = await api.put(`/admin/deals/${deal.id}`, deal, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("updated deal", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to update deal"
      );
    }
  }
);

export const deleteDeal = createAsyncThunk(
  "deals/deleteDeal",
  async (dealId: string, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/admin/deals/${dealId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("deleted deal", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete deal"
      );
    }
  }
);

const dealSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    resetDealState: (state) => {
      state.dealCreated = false;
      state.dealUpdated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDeal.fulfilled, (state, action) => {
        state.loading = false;
        state.dealCreated = true;
        state.deals.push(action.payload);
      })
      .addCase(createDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllDeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllDeals.fulfilled, (state, action) => {
        state.loading = false;
        state.deals = action.payload;
      })
      .addCase(getAllDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateDeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDeal.fulfilled, (state, action) => {
        state.loading = false;
        state.dealUpdated = true;
        const index = state.deals.findIndex(
          (deal) => deal.id === action.payload.id
        );
        if (index !== -1) {
          state.deals[index] = action.payload;
        }
      })
      .addCase(updateDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteDeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteDeal.fulfilled, (state, action) => {
        state.loading = false;
        state.deals = state.deals.filter(
          (deal) => deal.id?.toString() !== action.meta.arg
        );
      })
      .addCase(deleteDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetDealState } = dealSlice.actions;

export default dealSlice.reducer;


# DealTable.tsx

export default function DealTable() {
  const dispatch = useAppDispatch();
  const { deal } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(getAllDeals());
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">



# in Store.ts

import wishlistSlice from "./customer/wishlistSlice";
import sellerOrderSlice from "./seller/sellerOrderSlice";
import transactionSlice from "./seller/transactionSlice";
import adminSlice from "./admin/adminSlice";
import customerSlice from "./customer/customerSlice";
import dealSlice from "./admin/DealSlice";

const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
  auth: authSlice,
  cart: cartSlice,
  order: orderSlice,
  wishlist: wishlistSlice,
  customer: customerSlice,

  sellerOrder: sellerOrderSlice,
  transactions: transactionSlice,

  admin: adminSlice,
  deal: dealSlice,
});



# in CreateDealForm.tsx

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { discount } from "../../../data/Filter/discount";
import { createDeal } from "../../../State/admin/DealSlice";

const CreateDealForm = () => {
  const dispatch = useAppDispatch();
  const { customer } = useAppSelector((store) => store);

  const formik = useFormik({
    initialValues: {
      discount: 0,
      category: "",
    },
    onSubmit: (values) => {
      console.log("submit", values);
      const reqData = {
        discount: values.discount,
        category: {
          id: values.category,
        },
      };
      dispatch(createDeal(reqData));
    },
  });

  return (
    <Box
      component={"form"}
      onSubmit={formik.handleSubmit}
      className="!space-y-6"
    >
      <Typography variant="h4" className="text-center">
        Deal Creation
      </Typography>

      <TextField
        fullWidth
        name="discount"
        label="Discount"
        value={formik.values.discount}
        onChange={formik.handleChange}
        error={formik.touched.discount && Boolean(formik.errors.discount)}
        helperText={formik.touched.discount && formik.errors.discount}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.values.category}
          label="Category"
          onChange={formik.handleChange}
        >
          {customer.homePageData?.dealCategories.map((item) => (
            <MenuItem value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button fullWidth sx={{ py: ".9rem" }} type="submit" variant="contained">
        Create Deal
      </Button>
    </Box>
  );
};

export default CreateDealForm;




# THEN BACK TO BE, WE DIDNT CREATE A METHOD TO GET ALL DEALS

# in DealController.java

package com.mackodev.controller;

import com.mackodev.modal.Deal;
import com.mackodev.response.ApiResponse;
import com.mackodev.service.DealService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin/deals")
public class DealController {
    private final DealService dealService;

    @GetMapping
    public ResponseEntity<List<Deal>> getDeals() {
    List<Deal> createdDeals = dealService.getDeals();

    return new ResponseEntity<>(createdDeals, HttpStatus.ACCEPTED);
    }

    @PostMapping
    public ResponseEntity<Deal> createDeals(@RequestBody Deal deals) {
        Deal createdDeals = dealService.createDeal(deals);

        return new ResponseEntity<>(createdDeals, HttpStatus.ACCEPTED);
    }



# then back to DealTable.tsx

 <TableBody>
          {deal.deals.map((item, index) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell>
                <img
                  className="w-20 rounded-md"
                  src={item.category.image}
                  alt=""
                />
              </StyledTableCell>
              <StyledTableCell>{item.category.categoryId}</StyledTableCell>
              <StyledTableCell align="right">{item.discount}</StyledTableCell>
              <StyledTableCell align="right">
                <Button>
                  <DriveFileRenameOutlineIcon />
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button>
                  <DeleteForeverIcon sx={{ color: "red" }} />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>


## TUT FINISHED