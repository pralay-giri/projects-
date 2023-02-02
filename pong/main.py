import pygame
clock = pygame.time.Clock()
# all veriable
WIDTH = 800
HEIGHT = 600
player_height = 80
player_width = 20
GAME_OVER = False
player_1_x = 0
player_1_y = HEIGHT/2-10
player_2_x = 780
player_2_y = HEIGHT/2-10
player_1_score = 0
player_2_score = 0
ball_pos_x = WIDTH/2
ball_pos_y = HEIGHT/2
ball_change_x = 1
ball_change_y = 1
player_1_change = 0
player_2_change = 0
# color
black = (0, 0, 0)
white = (255, 255, 255)
red = (255, 0, 0)
blue = (0, 0, 255)
green = (0, 255, 0)

pygame.init()
win = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption('ping_Pong')
win.fill(black)

def msg(MESSAGE, color, x_pos, y_pos):
    FONT = pygame.font.SysFont(None,30)
    message = FONT.render(MESSAGE,True,color)
    win.blit(message,(x_pos, y_pos))
# main game loop
while GAME_OVER == False:
    win.fill(black)
    msg(str(player_1_score),red, 200, 5)
    msg(str(player_2_score),blue, 600, 5)
    # left
    pygame.draw.rect(win, white, [player_1_x, player_1_y, player_width, player_height],50)
    # right
    pygame.draw.rect(win, white, [player_2_x, player_2_y, player_width, player_height],50)
    # middle line
    pygame.draw.line(win, white, (WIDTH/2, 0), (WIDTH/2, HEIGHT), 1)
    # ball
    pygame.draw.circle(win, white, [ball_pos_x, ball_pos_y], 10)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:   #quit
            pygame.QUIT
            quit()
        # player move by keybord
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_w:
                player_1_change += 7
            if event.key == pygame.K_s:
                player_1_change -= 7
            if event.key == pygame.K_UP:
                player_2_change += 7
            if event.key == pygame.K_DOWN:
                player_2_change -= 7
        if event.type == pygame.KEYUP:
            if event.key == pygame.K_w or event.key == pygame.K_s:
                player_1_change = 0
            if event.key == pygame.K_UP or event.key == pygame.K_DOWN:
                player_2_change = 0
    if player_1_y >= HEIGHT-80:
        player_1_y = HEIGHT-80
    if player_1_y <= 0:
        player_1_y = 0
    if player_2_y >= HEIGHT-80:
        player_2_y = HEIGHT-80
    if player_2_y <= 0:
        player_2_y = 0
    player_1_y -= player_1_change
    player_2_y -= player_2_change
    # condition for moving the ball
    ball_pos_y += (ball_change_y*5)
    ball_pos_x += (ball_change_x*5)
    if ball_pos_x > 790:
        ball_pos_x = 790
        ball_change_x = -1
    if ball_pos_x < 10:
        ball_pos_x = 10
        ball_change_x = 1
    if ball_pos_y > 590:
        ball_pos_y = 590
        ball_change_y = -1
    if ball_pos_y < 10:
        ball_pos_y = 10
        ball_change_y = 1
    if player_1_x+20 >= ball_pos_x-5 >= player_1_x and player_1_y <= ball_pos_y+5 <= player_1_y+80:
        player_1_score += 1
        ball_change_x = 1
    if  player_2_x < ball_pos_x+5  < player_2_x+20 and player_2_y <= ball_pos_y+5 <= player_2_y+80:
        player_2_score += 1
        ball_change_x = -1
    pygame.display.update()
    clock.tick(60)