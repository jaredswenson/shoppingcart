<template>
  <div id="app">

    <table style="height: 100%;" width="100%" border="0">
        <tbody>
            <tr>
                <td>
                    <table class="fullWidth logoBar">
                        <tbody>
                            <tr>
                                <!-- LOGO BAR -->
                                <td id="logo" class="welcomeMessage">

                                    <div>
                                        <span>Logged in as
                                            <strong>Aaron Xennsoft</strong>
                                        </span>
                                        <br>
                                        <span id="lblTimeNow" style="font-size: 9px;">8/8/2018 12:02:40 PM</span>
                                    </div>

                                </td>
                                <!-- end logo bar -->
                            </tr>
                        </tbody>
                    </table>
                    <table class="fullWidth">
                        <tbody>
                            <tr>
                                <td class="menuBarContainer">
                                    <table class="fullWidth">
                                        <tbody>
                                            <tr>
                                                <!-- MAIN NAVIGATION -->
                                                <td>

                                                    <div class="right menuBarItem">
                                                        <a href="/logout.asp" target="__fraContent">
                                                            Log Out</a>
                                                    </div>
                                                    <div class="right menuBarItem">
                                                        <a href="https://BETA-wvo.yolilife.com/WorldVu.Net/WebClient/Dashboard/Dashboard.aspx" target="__fraContent">
                                                            Home</a>
                                                    </div>

                                                    <div class="right menuBarItem">
                                                        <a href="/systems/wiki/sso.asp" target="_blank">
                                                            Documentation</a>
                                                    </div>

                                                    <div class="menuBarItem" style="float: left; white-space: nowrap;">
                                                        <router-link to="/" class="currentTab">Home</router-link>
                                                    </div>

                                                    <div class="menuBarItem" style="float: left; white-space: nowrap;">
                                                        <router-link to="/about">Corporate Content</router-link>
                                                    </div>

                                                    <div class="menuBarItem" style="float: left; white-space: nowrap;">
                                                        <router-link to="/list">Orders</router-link>
                                                    </div>

                                                    <div class="menuBarItem" style="float: left; white-space: nowrap;">
                                                        <a href="javascript:void(0);" id="D95B8928-47B0-4C82-8062-81392C460537" onclick="bbmenu_loadSub('D95B8928-47B0-4C82-8062-81392C460537','');">
                                                            Portal Admin</a>
                                                    </div>

                                                    <div class="menuBarItem" style="float: left; white-space: nowrap;">
                                                        <a href="javascript:void(0);" id="FB3B1E13-AE72-494E-B86F-88F827220030" onclick="bbmenu_loadSub('FB3B1E13-AE72-494E-B86F-88F827220030','');">
                                                            Services</a>
                                                    </div>

                                                    <div class="menuBarItem" style="float: left; white-space: nowrap;">
                                                        <a href="javascript:void(0);" id="D0D0434A-A89D-4CC0-88CB-CB8FD1859AC1" onclick="bbmenu_loadSub('D0D0434A-A89D-4CC0-88CB-CB8FD1859AC1','');">
                                                            Reports</a>
                                                    </div>

                                                    <div class="menuBarItem" style="float: left; white-space: nowrap;">
                                                        <a href="javascript:void(0);" id="CF9A7D60-C743-45A6-9291-D5C6B8CB08D7" onclick="bbmenu_loadSub('CF9A7D60-C743-45A6-9291-D5C6B8CB08D7','');">
                                                            Administration</a>
                                                    </div>

                                                    <div class="menuBarItem" style="float: left; white-space: nowrap;">
                                                        <a href="javascript:void(0);" id="24511659-297E-4D77-87CB-9C1B2BA9C59C" onclick="bbmenu_loadSub('24511659-297E-4D77-87CB-9C1B2BA9C59C','');">
                                                            PayHub</a>
                                                    </div>

                                                </td>
                                                <!-- end MAIN NAVIGATION -->
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="100%" valign="top" id="iFrametd">

                    <table style="height: 100%" width="100%">
                        <tbody>
                            <tr>
                                <td id="LeftNavBar" valign="top" class="subNavContainer">

                                    <div id="crtlSideNav" style="width: 180px;">
                                        <table class="subNav">
                                            <tbody>
                                                <tr>
                                                    <td class="subNavTitle">
                                                        <a href="javascript:loadPathIfExists('');">WorldVu</a>
                                                    </td>
                                                    <td name="nav_asdf" class="subNavArrow">
                                                        <img src="/images/all/subNav_arrowUp.gif" width="7" height="5" alt="">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div id="asdf" style="display: block;">

                                            <div class="subNavItem" style="line-height:20px; white-space: nowrap;">
                                                <a href="javascript:void(0);" onclick="bbmenu_loadPage('/clients/pandora/worldvu/default.asp', 'False');">Member Manager</a>
                                            </div>

                                            <div class="subNavItem" style="line-height:20px; white-space: nowrap;">
                                                <a href="javascript:void(0);" onclick="bbmenu_loadPage('worldvu.net/webclient/custom/taxcompliance/uploadtaxfile', 'False');">Upload Tax File</a>
                                            </div>

                                            <div class="subNavItem" style="line-height:20px; white-space: nowrap;">
                                                <a href="javascript:void(0);" onclick="bbmenu_loadPage('/clients/pandora/reports/compensation/volumeadjust.asp', 'False');">Volume Adjust</a>
                                            </div>

                                            <div class="subNavItem" style="line-height:20px; white-space: nowrap;">
                                                <a href="javascript:void(0);" onclick="bbmenu_loadPage('/worldvu.net/webclient/distributormanager/volume/customvolumeadjust.aspx', 'False');">Custom Volume Adjustment</a>
                                            </div>

                                            <div class="subNavItem" style="line-height:20px; white-space: nowrap;">
                                                <a href="javascript:void(0);" onclick="bbmenu_loadPage('/worldvu.net/webclient/distributormanager/notes/batchimportnotes.aspx', 'False');">Batch Import Notes</a>
                                            </div>

                                            <div class="subNavItem" style="line-height:20px; white-space: nowrap;">
                                                <a href="javascript:void(0);" onclick="bbmenu_loadPage('/worldvu.net/webclient/distributormanager/importbonusadjustments.aspx', 'False');">Import Bonus Adjustment</a>
                                            </div>

                                        </div>

                                        <table class="subNav">
                                            <tbody>
                                                <tr>
                                                    <td class="subNavTitle">
                                                        <a href="javascript:loadPathIfExists('');">Autoship</a>
                                                    </td>
                                                    <td name="nav_CF9CCE95-661A-4C08-913B-FC0237C15061" class="subNavArrow" onclick="bbmenu_expand(this,'CF9CCE95-661A-4C08-913B-FC0237C15061');">
                                                        <img src="/images/all/subNav_arrowUp.gif" width="7" height="5" alt="">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div id="CF9CCE95-661A-4C08-913B-FC0237C15061" style="display: block;">

                                            <div class="subNavItem" style="line-height:20px; white-space: nowrap;">
                                                <a href="javascript:void(0);" onclick="bbmenu_loadPage('/clients/pandora/autoship/asreport.asp', 'False');">Autoship Report</a>
                                            </div>

                                            <div class="subNavItem" style="line-height:20px; white-space: nowrap;">
                                                <a href="javascript:void(0);" onclick="bbmenu_loadPage('/clients/pandora/autoship/asmanager.asp', 'False');">Autoship Manager</a>
                                            </div>

                                            <div class="subNavItem" style="line-height:20px; white-space: nowrap;">
                                                <a href="javascript:void(0);" onclick="bbmenu_loadPage('/clients/pandora/autoship/aserrormanagement.asp', 'False');">Error Management</a>
                                            </div>

                                        </div>
                                    </div>

                                </td>
                                <td valign="top" style="background-color: #ffffff;" height="100%">

                                    <!-- This will display the content in the view/component of the router link that has been selected -->
                                    <router-view/>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table class="fullWidth">
                        <tbody>
                            <tr>
                                <td class="footerBar">
                                    <div id="footerBarLogo">
                                        <span class="copyRight">Copyright© 2018 Xennsoft Corp. All rights reserved.</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <VueModal v-if="this.$store.state.showModal" id="VueModal" :title="this.$store.state.modalTitle" :myclass="this.$store.state.modalSize" :headeron="this.$store.state.modalHeader" :footeron="this.$store.state.modalFooter" :content="this.$store.state.modalContent">
      <About v-if="this.$store.state.showAbout"/>
      <Template v-if="this.$store.state.showTemplate"/>
    </VueModal>
  </div>
</template>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
