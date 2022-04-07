<template>
    <div class="header">
        <div class="left">
            <img class="logo" alt="logo" :src="logoIcon" />
            <div class="system-name">
                <div class="name">Ace Electronics</div>
                <div class="name">Free Trial</div>
            </div>
            <div class="operation-icon">
                <el-icon color="#fff" :size="18"><arrow-down /></el-icon>
            </div>
        </div>
        <div class="right">
            <div class="item">
                <el-icon><plus /></el-icon>
            </div>
            <!-- 消息提示 -->
            <div class="item">
                <el-badge :value="2" class="badge-item">
                    <img :src="bellIcon" alt="">
                </el-badge>
            </div>
            <div class="item">
                <!-- 用户名下拉菜单 -->
                <el-dropdown trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        <span class="user-name">W</span>
                          <el-icon class="arrow-down">
                            <arrow-down />
                          </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <a href="" target="_blank">
                                <el-dropdown-item>项目仓库</el-dropdown-item>
                            </a>
                            <el-dropdown-item command="user">个人中心</el-dropdown-item>
                            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    import logo from "../assets/slogo.png";
    import bellIcon from "../assets/bell.png";
    export default {
        setup() {
            // 用户名下拉菜单选择事件
            const handleCommand = (command) => {
                if (command == "loginout") {
                    console.log('退出登录');
                } else if (command == "user") {
                    console.log(command);
                }
            };
            return {
                handleCommand,
                logoIcon: logo,
                bellIcon
            };
        },
    };
</script>
<style lang="scss" scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 56px;
        color: #fff;
        display: flex;
        background-color: #2873E7;

        .left {
            width: 208px;
            display: flex;
            align-items: center;
            font-size: 14px;
            padding: 12px 24px;
            box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.15);
            .logo {
                width: 22px;
                height: 32px;
            }
            .system-name {
                flex: 1;
                margin-left: 20px;
                .name {
                    text-align: left;
                    line-height: 16px;
                    &:first-child {
                        font-weight: 700;
                    }
                }
            }

            .operation-icon {

            }
        }

        .right {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 12px 24px;

            .item {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 32px;
                &:last-child {
                    margin-right: 0px;
                }
                .badge-item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .user-name {
                    color: #2873E7;
                    width: 26px;
                    height: 26px;
                    line-height: 26px;
                    border-radius: 50%;
                    font-weight: bold;
                    display: inline-block;
                    background-color: #fff;
                    text-align: center;
                }
                .arrow-down {
                    margin-left: 8px;
                }
            }
        }
    }

    .el-dropdown-link {
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item {
        text-align: center;
    }
</style>
<style>
    .badge-item .el-badge__content {
        width: 16px;
        height: 16px;
        padding: 0px;
        background-color: red;
        font-size: 12px;
        border: 0px;
        font-weight: bold;
    }
</style>