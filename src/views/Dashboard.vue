<template>
  <div>
    Dashboard
    <AddPayment @addNewPayment="addData" />
    <br />
    <CategorySelect :categories="categories" />
    Total: {{ getFPV }}
    <PaymentsDisplay :list="currentElements" />
    <Pagination
      :cur="curPage"
      :n="n"
      :length="paymentsList.length"
      @paginate="onChangePage"
    />
     <button @click="showPaymentsForm">Show Payments Form</button>
          <button @click="closePaymentsForm">Close</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import CategorySelect from "@/components/CategorySelect.vue";
import Pagination from "@/components/Pagination.vue";
import AddPayment from "@/components/AddPayment.vue";
export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    CategorySelect,
    AddPayment,
    Pagination
  },
  data() {
    return {
      page: "",
      addFormShown: false,
      curPage: 1,
      n: 10
    };
  },
  methods: {
    ...mapMutations(["setPaymentListData", "addDataToPaymentsList"]),
    ...mapActions(["fetchData", "fetchCategory"]),
    addData(data) {
      this.addDataToPaymentsList(data);
    },
    showPaymentsForm (){
      this.$modal.show('AddPayment',{header:"Add"})
    },
    closePaymentsForm (){
      this.$modal.hide()
    },
    onChangePage(p) {
      this.curPage = p;
    },
    onClose(){
      this.addFormShown = false
    }
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentList",
      categories: "getCategoryList"
    }),
    currentElements() {
      const { n, curPage } = this;
      return this.paymentsList.slice(n * (curPage - 1), n * (curPage - 1) + n);
    },
    getFPV() {
      return this.$store.getters.getFullPyamentValue;
    }
  },
  created() {
    this.fetchData();
    if (!this.categories.length) {
      this.fetchCategory();
    }
  },
  mounted() {
    const page = this.$route.params.page || 1;
    this.curPage = Number(page);
  }
};
</script>
