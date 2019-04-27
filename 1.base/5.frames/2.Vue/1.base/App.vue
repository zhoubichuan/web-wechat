<template>
  <div id="app">
      <Menu>
          <template v-for="menu in menuList">
              <MenuItem :key="menu.title" v-if="!menu.children">
                {{menu.title}}
              </MenuItem>
              <ReSubMenu :key="menu.title" v-else :data="menu"></ReSubMenu>
          </template>
      </Menu>
  </div>
</template>

<script>
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
import ReSubMenu from "./ReSubMenu";
export default {
  data() {
    return {
      msg: "hello",
      menuList: [
        {
          title: "菜单1",
          children: [
            {
              title: "菜单1-1",
              children: [
                { title: "菜单1-1-1" },
                { title: "菜单1-1-2" },
                {
                  title: "菜单1-1-3",
                  children: [
                    { title: "菜单1-1-1" },
                    { title: "菜单1-1-2" },
                    {
                      title: "菜单1-1-3",
                      children: [
                        { title: "菜单1-1-1" },
                        { title: "菜单1-1-2" },
                        {
                          title: "菜单1-1-3",
                          children: [
                            { title: "菜单1-1-1" },
                            { title: "菜单1-1-2" },
                            { title: "菜单1-1-3" }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { title: "菜单1-2" },
            { title: "菜单1-3" }
          ]
        },
        {
          title: "菜单2"
        },
        {
          title: "菜单3"
        }
      ]
    };
  },
  components: {
    Menu,
    MenuItem,
    SubMenu,
    ReSubMenu
  }
};
</script>
<style>
#app {
  color: red;
}
</style>

