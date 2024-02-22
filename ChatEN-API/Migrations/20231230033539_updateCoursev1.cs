using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatEN.Migrations
{
    /// <inheritdoc />
    public partial class updateCoursev1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Author",
                table: "Course",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Course",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Author",
                table: "Course");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Course");
        }
    }
}
