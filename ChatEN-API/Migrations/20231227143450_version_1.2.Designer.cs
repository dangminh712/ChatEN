﻿// <auto-generated />
using System;
using ChatEN.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ChatEN.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20231227143450_version_1.2")]
    partial class version_12
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("ChatEN.Models.Entity.Course", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Discount")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Photo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Price")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rating")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Course");
                });

            modelBuilder.Entity("ChatEN.Models.Entity.MyCourse", b =>
                {
                    b.Property<int>("IDCourse")
                        .HasColumnType("int")
                        .HasColumnOrder(0);

                    b.Property<int>("IDPerson")
                        .HasColumnType("int")
                        .HasColumnOrder(1);

                    b.Property<DateTime?>("DateBuy")
                        .HasColumnType("datetime2");

                    b.Property<float>("Price")
                        .HasColumnType("real");

                    b.HasKey("IDCourse", "IDPerson");

                    b.HasIndex("IDPerson");

                    b.ToTable("MyCourse");
                });

            modelBuilder.Entity("ChatEN.Models.Entity.MyFlip", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<int>("PersonID")
                        .HasColumnType("int");

                    b.Property<string>("mean")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("word")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("PersonID");

                    b.ToTable("MyFlip");
                });

            modelBuilder.Entity("ChatEN.Models.Entity.account", b =>
                {
                    b.Property<int>("Personid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Personid"));

                    b.Property<bool>("Islock")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Personid");

                    b.ToTable("account");
                });

            modelBuilder.Entity("ChatEN.Models.Entity.chatbot", b =>
                {
                    b.Property<int>("inde")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("inde"));

                    b.Property<string>("botchat")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("own")
                        .HasColumnType("int");

                    b.Property<string>("userchat")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("inde");

                    b.HasIndex("own");

                    b.ToTable("chatbot");
                });

            modelBuilder.Entity("ChatEN.Models.Entity.favourite", b =>
                {
                    b.Property<int>("WordID")
                        .HasColumnType("int")
                        .HasColumnOrder(1);

                    b.Property<int>("own")
                        .HasColumnType("int")
                        .HasColumnOrder(0);

                    b.HasKey("WordID", "own");

                    b.HasIndex("own");

                    b.ToTable("favourite");
                });

            modelBuilder.Entity("ChatEN.Models.Entity.vocabulary", b =>
                {
                    b.Property<int>("WordID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("WordID"));

                    b.Property<string>("Word")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("mean")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("WordID");

                    b.ToTable("vocabulary");
                });

            modelBuilder.Entity("ChatEN.Models.Entity.MyCourse", b =>
                {
                    b.HasOne("ChatEN.Models.Entity.Course", "course")
                        .WithMany("MyCourses")
                        .HasForeignKey("IDCourse")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ChatEN.Models.Entity.account", "account")
                        .WithMany("myCourse")
                        .HasForeignKey("IDPerson")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("account");

                    b.Navigation("course");
                });

            modelBuilder.Entity("ChatEN.Models.Entity.MyFlip", b =>
                {
                    b.HasOne("ChatEN.Models.Entity.account", "account")
                        .WithMany("myFlip")
                        .HasForeignKey("PersonID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("account");
                });

            modelBuilder.Entity("ChatEN.Models.Entity.chatbot", b =>
                {
                    b.HasOne("ChatEN.Models.Entity.account", "account")
                        .WithMany("chatbot")
                        .HasForeignKey("own");

                    b.Navigation("account");
                });

            modelBuilder.Entity("ChatEN.Models.Entity.favourite", b =>
                {
                    b.HasOne("ChatEN.Models.Entity.account", "account")
                        .WithMany("favourite")
                        .HasForeignKey("own")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ChatEN.Models.Entity.vocabulary", "vocabulary")
                        .WithMany("favourite")
                        .HasForeignKey("WordID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("account");

                    b.Navigation("vocabulary");
                });

            modelBuilder.Entity("ChatEN.Models.Entity.Course", b =>
                {
                    b.Navigation("MyCourses");
                });

            modelBuilder.Entity("ChatEN.Models.Entity.account", b =>
                {
                    b.Navigation("chatbot");

                    b.Navigation("favourite");

                    b.Navigation("myCourse");

                    b.Navigation("myFlip");
                });

            modelBuilder.Entity("ChatEN.Models.Entity.vocabulary", b =>
                {
                    b.Navigation("favourite");
                });
#pragma warning restore 612, 618
        }
    }
}