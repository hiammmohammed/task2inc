#include <stdio.h>

typedef struct {
    int active_flag;
} UserInfo;

typedef union {
    UserInfo info;
    int flag;
} User;

int main() {
    char usernamer[50];
    char passwordr[50];
    char usernamel[50];
    char passwordl[50];

    User user;

    printf("Register at first\n");

    printf("Enter your username: ");
    scanf("%s", usernamer);
    printf("Enter your password: ");
    scanf("%s", passwordr);
    printf("Successfully registered\n");

    printf("For Login\n");
    printf("Enter your username: ");
    scanf("%s", usernamel);
    printf("Enter your password: ");
    scanf("%s", passwordl);

    if (strcmp(usernamer, usernamel) == 0 && strcmp(passwordr, passwordl) == 0) {
        printf("Successfully logged in\n");

        user.info.active_flag = 1;

        if (user.flag) {
            printf("User is active\n");
        } else {
            printf("User is not active\n");
        }
    } else {
        printf("Make sure that you have registered or check the username and password\n");
    }

}
