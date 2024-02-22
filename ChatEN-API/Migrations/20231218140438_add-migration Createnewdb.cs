using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatEN.Migrations
{
    /// <inheritdoc />
    public partial class addmigrationCreatenewdb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "account",
                columns: table => new
                {
                    Personid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Islock = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_account", x => x.Personid);
                });

            migrationBuilder.CreateTable(
                name: "Course",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Photo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Discount = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rating = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Course", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "vocabulary",
                columns: table => new
                {
                    WordID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Word = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    mean = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_vocabulary", x => x.WordID);
                });

            migrationBuilder.CreateTable(
                name: "chatbot",
                columns: table => new
                {
                    inde = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    userchat = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    botchat = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    own = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_chatbot", x => x.inde);
                    table.ForeignKey(
                        name: "FK_chatbot_account_own",
                        column: x => x.own,
                        principalTable: "account",
                        principalColumn: "Personid");
                });

            migrationBuilder.CreateTable(
                name: "MyFlip",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PersonID = table.Column<int>(type: "int", nullable: false),
                    word = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    mean = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MyFlip", x => x.ID);
                    table.ForeignKey(
                        name: "FK_MyFlip_account_PersonID",
                        column: x => x.PersonID,
                        principalTable: "account",
                        principalColumn: "Personid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MyCourse",
                columns: table => new
                {
                    IDCourse = table.Column<int>(type: "int", nullable: false),
                    IDPerson = table.Column<int>(type: "int", nullable: false),
                    DateBuy = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Price = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MyCourse", x => new { x.IDCourse, x.IDPerson });
                    table.ForeignKey(
                        name: "FK_MyCourse_Course_IDCourse",
                        column: x => x.IDCourse,
                        principalTable: "Course",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MyCourse_account_IDPerson",
                        column: x => x.IDPerson,
                        principalTable: "account",
                        principalColumn: "Personid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "favourite",
                columns: table => new
                {
                    own = table.Column<int>(type: "int", nullable: false),
                    WordID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_favourite", x => new { x.WordID, x.own });
                    table.ForeignKey(
                        name: "FK_favourite_account_own",
                        column: x => x.own,
                        principalTable: "account",
                        principalColumn: "Personid",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_favourite_vocabulary_WordID",
                        column: x => x.WordID,
                        principalTable: "vocabulary",
                        principalColumn: "WordID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_chatbot_own",
                table: "chatbot",
                column: "own");

            migrationBuilder.CreateIndex(
                name: "IX_favourite_own",
                table: "favourite",
                column: "own");

            migrationBuilder.CreateIndex(
                name: "IX_MyCourse_IDPerson",
                table: "MyCourse",
                column: "IDPerson");

            migrationBuilder.CreateIndex(
                name: "IX_MyFlip_PersonID",
                table: "MyFlip",
                column: "PersonID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "chatbot");

            migrationBuilder.DropTable(
                name: "favourite");

            migrationBuilder.DropTable(
                name: "MyCourse");

            migrationBuilder.DropTable(
                name: "MyFlip");

            migrationBuilder.DropTable(
                name: "vocabulary");

            migrationBuilder.DropTable(
                name: "Course");

            migrationBuilder.DropTable(
                name: "account");
        }
    }
}
