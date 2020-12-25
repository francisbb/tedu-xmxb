/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 100119
 Source Host           : localhost:3306
 Source Schema         : store

 Target Server Type    : MySQL
 Target Server Version : 100119
 File Encoding         : 65001

 Date: 19/12/2020 11:39:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for idx_product
-- ----------------------------
DROP TABLE IF EXISTS `idx_product`;
CREATE TABLE `idx_product`  (
  `pid` int(8) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `price` decimal(10, 2) DEFAULT NULL,
  `href` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pic` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `feature_id` int(6) DEFAULT NULL,
  PRIMARY KEY (`pid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `pid` int(255) NOT NULL,
  `pname` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `price` decimal(12, 0) DEFAULT NULL,
  `stock` tinyint(255) DEFAULT NULL,
  `status` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `saleNumber` int(255) DEFAULT NULL,
  `count` tinyint(255) DEFAULT 1,
  `index_img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `family_id` int(255) DEFAULT NULL,
  `feature_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`pid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `product` VALUES (2, 'JEEP男女通用户外登山帽纯棉时尚休闲帽', 350, 98, '1', 0, 1, 'm1.jpg', 20, 10);
INSERT INTO `product` VALUES (3, 'MLB棒球帽NY美职棒洋基队鸭舌帽', 100, 92, '1', 0, 1, 'm1.jpg', 20, 10);
INSERT INTO `product` VALUES (4, 'Mizuno美津浓', 239, 98, '1', 0, 1, 'm1.jpg', 10, 10);
INSERT INTO `product` VALUES (6, '[DUDU]质感旅人手提双肩背包', 297, 99, '1', 0, 1, 'm1.jpg', 40, 10);
INSERT INTO `product` VALUES (7, '[DUDU]酷感加背系列手提双肩背包', 368, 92, '1', 0, 1, 'b1.jpg', 40, 10);
INSERT INTO `product` VALUES (8, '[FOXER]金狐狸2016新款欧美时尚', 268, 99, '1', 0, 1, 'b4.jpg', 30, 20);
INSERT INTO `product` VALUES (9, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 299, 98, '1', 0, 1, 'b7.jpg', 40, 20);
INSERT INTO `product` VALUES (10, 'Mizuno美津浓', 239, 98, '1', 0, 1, 'm1.jpg', 10, 10);
INSERT INTO `product` VALUES (11, 'Mizuno美津浓', 239, 98, '1', 0, 1, 'm1.jpg', 10, 10);
INSERT INTO `product` VALUES (12, 'Mizuno美津浓', 239, 98, '1', 0, 1, 'm1.jpg', 10, 10);
INSERT INTO `product` VALUES (13, 'Mizuno美津浓', 239, 98, '1', 0, 1, 'm1.jpg', 10, 10);
INSERT INTO `product` VALUES (14, 'Mizuno美津浓', 239, 98, '1', 0, 1, 'm1.jpg', 10, 10);
INSERT INTO `product` VALUES (15, 'Mizuno美津浓', 239, 98, '1', 0, 1, 'm1.jpg', 10, 10);
INSERT INTO `product` VALUES (16, 'Mizuno美津浓', 239, 98, '1', 0, 1, 'm1.jpg', 10, 10);

-- ----------------------------
-- Table structure for product_category
-- ----------------------------
DROP TABLE IF EXISTS `product_category`;
CREATE TABLE `product_category`  (
  `caid` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`caid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 41 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of product_category
-- ----------------------------
INSERT INTO `product_category` VALUES (10, '鞋子');
INSERT INTO `product_category` VALUES (20, '帽子');
INSERT INTO `product_category` VALUES (30, '箱子');
INSERT INTO `product_category` VALUES (40, '包包');

-- ----------------------------
-- Table structure for product_detail
-- ----------------------------
DROP TABLE IF EXISTS `product_detail`;
CREATE TABLE `product_detail`  (
  `did` int(255) NOT NULL,
  `product_name` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `product_detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `productid` int(255) DEFAULT NULL,
  PRIMARY KEY (`did`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of product_detail
-- ----------------------------
INSERT INTO `product_detail` VALUES (0, '2', '3', 4);
INSERT INTO `product_detail` VALUES (1, '2', '2', 3);
INSERT INTO `product_detail` VALUES (7, 'JEEP男女通用户外登山帽纯棉时尚休闲帽', 'cap.jpg', 2);
INSERT INTO `product_detail` VALUES (8, 'JEEP男女通用户外登山帽纯棉时尚休闲帽', 'mma1.jpg', 2);
INSERT INTO `product_detail` VALUES (9, 'JEEP男女通用户外登山帽纯棉时尚休闲帽', 'mma2.jpg', 2);
INSERT INTO `product_detail` VALUES (10, 'MLB棒球帽NY美职棒洋基队鸭舌帽', 'mmb3.jpg', 3);
INSERT INTO `product_detail` VALUES (11, 'MLB棒球帽NY美职棒洋基队鸭舌帽', 'mmb1.jpg', 3);
INSERT INTO `product_detail` VALUES (12, 'MLB棒球帽NY美职棒洋基队鸭舌帽', 'mmb2.jpg', 3);
INSERT INTO `product_detail` VALUES (13, 'MLB棒球帽NY美职棒洋基队鸭舌帽', 'mmb4.jpg', 3);
INSERT INTO `product_detail` VALUES (14, 'Mizuno美津浓', 'shoes.jpg', 4);
INSERT INTO `product_detail` VALUES (15, 'Mizuno美津浓', 'xx11.jpg', 4);
INSERT INTO `product_detail` VALUES (16, 'Mizuno美津浓', 'xxa1.jpg', 4);
INSERT INTO `product_detail` VALUES (17, 'Mizuno美津浓', 'xxa2.jpg', 4);
INSERT INTO `product_detail` VALUES (18, 'Mizuno美津浓', 'xxa3.jpg', 4);
INSERT INTO `product_detail` VALUES (19, 'Mizuno美津浓', 'xxa4.jpg', 4);
INSERT INTO `product_detail` VALUES (20, 'Mizuno美津浓', 'xxa5.jpg', 4);
INSERT INTO `product_detail` VALUES (21, 'Mizuno美津浓', 'xxa6.jpg', 4);
INSERT INTO `product_detail` VALUES (22, 'Mizuno美津浓', 'xxa7.jpg', 4);
INSERT INTO `product_detail` VALUES (32, '[DUDU]质感旅人手提双肩背包', 'bb1.jpg', 6);
INSERT INTO `product_detail` VALUES (38, '[DUDU]质感旅人手提双肩背包', 'bbc2.jpg', 6);
INSERT INTO `product_detail` VALUES (39, '[DUDU]质感旅人手提双肩背包', 'bbc3.jpg', 6);
INSERT INTO `product_detail` VALUES (40, '[DUDU]质感旅人手提双肩背包', 'bbc13.jpg', 6);
INSERT INTO `product_detail` VALUES (41, '[DUDU]质感旅人手提双肩背包', 'bbc20.jpg', 6);
INSERT INTO `product_detail` VALUES (44, '[DUDU]酷感加背系列手提双肩背包', 'b1.jpg', 7);
INSERT INTO `product_detail` VALUES (45, '[DUDU]酷感加背系列手提双肩背包', 'bba1.jpg', 7);
INSERT INTO `product_detail` VALUES (46, '[DUDU]酷感加背系列手提双肩背包', 'bba2.jpg', 7);
INSERT INTO `product_detail` VALUES (47, '[DUDU]酷感加背系列手提双肩背包', 'bba3.jpg', 7);
INSERT INTO `product_detail` VALUES (48, '[DUDU]酷感加背系列手提双肩背包', 'bba11.jpg', 7);
INSERT INTO `product_detail` VALUES (54, '[FOXER]金狐狸2016新款欧美时尚', 'b4.jpg', 8);
INSERT INTO `product_detail` VALUES (55, '[FOXER]金狐狸2017新款欧美时尚', 'bbd1.jpg', 8);
INSERT INTO `product_detail` VALUES (56, '[FOXER]金狐狸2018新款欧美时尚', 'bbd2.jpg', 8);
INSERT INTO `product_detail` VALUES (57, '[FOXER]金狐狸2019新款欧美时尚', 'bbd3.jpg', 8);
INSERT INTO `product_detail` VALUES (58, '[FOXER]金狐狸2020新款欧美时尚', 'bbd4.jpg', 8);
INSERT INTO `product_detail` VALUES (59, '[FOXER]金狐狸2021新款欧美时尚', 'bbd5.jpg', 8);
INSERT INTO `product_detail` VALUES (60, '[FOXER]金狐狸2022新款欧美时尚', 'bbd6.jpg', 8);
INSERT INTO `product_detail` VALUES (61, '[FOXER]金狐狸2023新款欧美时尚', 'bbd7.jpg', 8);
INSERT INTO `product_detail` VALUES (62, '[FOXER]金狐狸2024新款欧美时尚', 'bbd8.jpg', 8);
INSERT INTO `product_detail` VALUES (63, '[FOXER]金狐狸2025新款欧美时尚', 'bbd9.jpg', 8);
INSERT INTO `product_detail` VALUES (64, '[FOXER]金狐狸2026新款欧美时尚', 'bbd10.jpg', 8);
INSERT INTO `product_detail` VALUES (65, '[FOXER]金狐狸2027新款欧美时尚', 'bbd11.jpg', 8);
INSERT INTO `product_detail` VALUES (66, '[FOXER]金狐狸2028新款欧美时尚', 'bbd12.jpg', 8);
INSERT INTO `product_detail` VALUES (67, '[FOXER]金狐狸2029新款欧美时尚', 'bbd13.jpg', 8);
INSERT INTO `product_detail` VALUES (68, '[FOXER]金狐狸2030新款欧美时尚', 'bbd14.jpg', 8);
INSERT INTO `product_detail` VALUES (69, '[FOXER]金狐狸2031新款欧美时尚', 'bbd15.jpg', 8);
INSERT INTO `product_detail` VALUES (70, '[FOXER]金狐狸2032新款欧美时尚', 'bbd16.jpg', 8);
INSERT INTO `product_detail` VALUES (71, '[FOXER]金狐狸2033新款欧美时尚', 'bbd17.jpg', 8);
INSERT INTO `product_detail` VALUES (72, '[FOXER]金狐狸2034新款欧美时尚', 'bbd18.jpg', 8);
INSERT INTO `product_detail` VALUES (73, '[FOXER]金狐狸2035新款欧美时尚', 'bbd19.jpg', 8);
INSERT INTO `product_detail` VALUES (74, '[FOXER]金狐狸2036新款欧美时尚', 'bbd20.jpg', 8);
INSERT INTO `product_detail` VALUES (75, '[FOXER]金狐狸2037新款欧美时尚', 'bbd21.jpg', 8);
INSERT INTO `product_detail` VALUES (76, '[FOXER]金狐狸2035新款欧美时尚', 'bbd22.jpg', 8);
INSERT INTO `product_detail` VALUES (84, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'b7.jpg', 9);
INSERT INTO `product_detail` VALUES (85, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg1.jpg', 9);
INSERT INTO `product_detail` VALUES (86, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg2.jpg', 9);
INSERT INTO `product_detail` VALUES (87, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg3.jpg', 9);
INSERT INTO `product_detail` VALUES (88, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg4.jpg', 9);
INSERT INTO `product_detail` VALUES (89, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg5.jpg', 9);
INSERT INTO `product_detail` VALUES (90, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg6.jpg', 9);
INSERT INTO `product_detail` VALUES (91, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg7.jpg', 9);
INSERT INTO `product_detail` VALUES (92, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg8.jpg', 9);
INSERT INTO `product_detail` VALUES (93, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg9.jpg', 9);
INSERT INTO `product_detail` VALUES (94, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg10.jpg', 9);
INSERT INTO `product_detail` VALUES (95, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg11.jpg', 9);
INSERT INTO `product_detail` VALUES (96, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg12.jpg', 9);
INSERT INTO `product_detail` VALUES (97, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg13.jpg', 9);
INSERT INTO `product_detail` VALUES (98, '[戈尔本]巴斯蒂亚系列细摔纹头层牛皮单肩', 'bbg12.jpg', 10);
INSERT INTO `product_detail` VALUES (99, NULL, NULL, NULL);
INSERT INTO `product_detail` VALUES (500, '1', '1', 1);

-- ----------------------------
-- Table structure for product_feature
-- ----------------------------
DROP TABLE IF EXISTS `product_feature`;
CREATE TABLE `product_feature`  (
  `fid` int(4) NOT NULL AUTO_INCREMENT,
  `fname` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`fid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of product_feature
-- ----------------------------
INSERT INTO `product_feature` VALUES (10, '新品');
INSERT INTO `product_feature` VALUES (20, '爆款');

-- ----------------------------
-- Table structure for shopping_cart
-- ----------------------------
DROP TABLE IF EXISTS `shopping_cart`;
CREATE TABLE `shopping_cart`  (
  `cid` int(11) NOT NULL AUTO_INCREMENT COMMENT '购物车编号',
  `user_id` int(11) NOT NULL COMMENT '用户编号',
  `product_id` int(11) NOT NULL COMMENT '商品编号',
  `ischecked` tinyint(4) DEFAULT NULL COMMENT '是否勾选',
  `ccount` int(8) DEFAULT NULL COMMENT '购物车数量',
  PRIMARY KEY (`cid`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `product_id`(`product_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 79 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of shopping_cart
-- ----------------------------
INSERT INTO `shopping_cart` VALUES (46, 2, 2, 5, 6);
INSERT INTO `shopping_cart` VALUES (47, 3, 3, NULL, NULL);
INSERT INTO `shopping_cart` VALUES (48, 4, 4, NULL, NULL);
INSERT INTO `shopping_cart` VALUES (49, 2, 2, 5, 6);
INSERT INTO `shopping_cart` VALUES (50, 2, 4, 3, 4);
INSERT INTO `shopping_cart` VALUES (51, 2, 2, 5, 6);
INSERT INTO `shopping_cart` VALUES (52, 2, 2, 5, 6);
INSERT INTO `shopping_cart` VALUES (53, 2, 2, 5, 6);
INSERT INTO `shopping_cart` VALUES (54, 2, 2, 5, 6);
INSERT INTO `shopping_cart` VALUES (55, 2, 2, 5, 6);
INSERT INTO `shopping_cart` VALUES (56, 3, 1, NULL, 1);
INSERT INTO `shopping_cart` VALUES (57, 3, 2, NULL, 1);
INSERT INTO `shopping_cart` VALUES (58, 4, 11, NULL, 2);
INSERT INTO `shopping_cart` VALUES (59, 4, 12, NULL, 2);
INSERT INTO `shopping_cart` VALUES (61, 5, 5, NULL, 2);
INSERT INTO `shopping_cart` VALUES (62, 4, 3, NULL, 1);
INSERT INTO `shopping_cart` VALUES (63, 5, 4, NULL, 1);
INSERT INTO `shopping_cart` VALUES (64, 5, 6, NULL, 2);
INSERT INTO `shopping_cart` VALUES (65, 5, 7, 1, 22);
INSERT INTO `shopping_cart` VALUES (66, 5, 8, NULL, 2);
INSERT INTO `shopping_cart` VALUES (67, 5, 9, NULL, 2);
INSERT INTO `shopping_cart` VALUES (68, 5, 10, NULL, 2);
INSERT INTO `shopping_cart` VALUES (69, 5, 11, NULL, 2);
INSERT INTO `shopping_cart` VALUES (70, 5, 12, NULL, 2);
INSERT INTO `shopping_cart` VALUES (72, 6, 6, NULL, 17);
INSERT INTO `shopping_cart` VALUES (77, 23, 3, NULL, 2);
INSERT INTO `shopping_cart` VALUES (78, 6, 5, NULL, 6);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `uid` int(6) NOT NULL AUTO_INCREMENT COMMENT '用户编号—自动生成',
  `uname` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户名—6-12位',
  `password` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户密码—8-16位',
  `email` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户邮箱—20位',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户手机号—11位',
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户昵称',
  `gender` tinyint(4) DEFAULT NULL COMMENT '用户性别',
  `avater` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户头像',
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'liangge', '123456', 'liang123@163.com', '18922222222', '亮哥', 1, 'default.jpg');
INSERT INTO `user` VALUES (2, 'range', '123456', 'ran123@163.com', '18933333333', '然哥', 1, 'default.jpg');
INSERT INTO `user` VALUES (3, 'dongge', '123456', 'dong123@163.com', '18944444444', '东哥', 1, 'default.jpg');
INSERT INTO `user` VALUES (4, 'houge', '123456', 'hou123@163.com', '18955555555', '侯哥', 1, 'default.jpg');
INSERT INTO `user` VALUES (5, 'wangge', '1234567', 'wang123@163.com', '18966666666', '王哥', 1, 'default.jpg');
INSERT INTO `user` VALUES (6, '蚕豆小姐', '234234', 'aozhen20@163.com', '18911111222', '凉拌黄瓜', 1, '1');
INSERT INTO `user` VALUES (7, 'ww', '22', '3', '4', NULL, NULL, NULL);
INSERT INTO `user` VALUES (8, 'ww', '1235123', '315@qq.com', '18888888222', '王五', 1, 'null');

SET FOREIGN_KEY_CHECKS = 1;
