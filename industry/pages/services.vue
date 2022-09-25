<template>
  <div>
    <NavThree />
    <PageHeader title="服务" />
    <ServicePage />
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import ServicePage from "../components/ServicePage";
  import NavThree from "@/components/NavThree";
  export default {
    components: {
      NavThree,
      ServicePage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Indutri | Services"
      }
    }
  }
</script>
