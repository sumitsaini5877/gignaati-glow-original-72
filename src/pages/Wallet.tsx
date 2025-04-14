
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Wallet as WalletIcon, 
  ArrowUpRight, 
  ArrowDownLeft,
  Plus,
  CreditCard,
  Download,
  BarChart4,
  Banknote,
  Mail,
  AlertCircle,
  HelpCircle,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Transaction = {
  id: string;
  type: "deposit" | "withdrawal" | "payment" | "received";
  amount: number;
  description: string;
  date: Date;
  status: "completed" | "pending" | "failed";
};

const Wallet = () => {
  const [walletBalance, setWalletBalance] = useState(1278.45);
  const [pendingBalance, setPendingBalance] = useState(325.00);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawMethod, setWithdrawMethod] = useState("bank");
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [depositAmount, setDepositAmount] = useState("");
  const [isDepositing, setIsDepositing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const transactions: Transaction[] = [
    {
      id: "tx-001",
      type: "received",
      amount: 350,
      description: "Payment from Client: Website Automation Setup",
      date: new Date(2023, 3, 15),
      status: "completed"
    },
    {
      id: "tx-002",
      type: "received",
      amount: 450,
      description: "Payment from Client: AI Agent Configuration",
      date: new Date(2023, 3, 12),
      status: "completed"
    },
    {
      id: "tx-003",
      type: "withdrawal",
      amount: 500,
      description: "Withdrawal to Bank Account",
      date: new Date(2023, 3, 10),
      status: "completed"
    },
    {
      id: "tx-004",
      type: "received",
      amount: 275,
      description: "Payment from Client: Prompt Engineering",
      date: new Date(2023, 3, 8),
      status: "completed"
    },
    {
      id: "tx-005",
      type: "received",
      amount: 325,
      description: "Payment from Client: Research Assistant Setup",
      date: new Date(2023, 3, 5),
      status: "pending"
    },
    {
      id: "tx-006",
      type: "deposit",
      amount: 200,
      description: "Deposit to Wallet",
      date: new Date(2023, 3, 1),
      status: "completed"
    },
  ];

  const handleWithdraw = () => {
    if (!withdrawAmount || isNaN(Number(withdrawAmount)) || Number(withdrawAmount) <= 0) {
      toast({
        variant: "destructive",
        title: "Invalid amount",
        description: "Please enter a valid amount to withdraw.",
      });
      return;
    }

    if (Number(withdrawAmount) > walletBalance) {
      toast({
        variant: "destructive",
        title: "Insufficient funds",
        description: "Your withdrawal amount exceeds your available balance.",
      });
      return;
    }

    setIsWithdrawing(true);

    // Simulate API call
    setTimeout(() => {
      setWalletBalance(prev => prev - Number(withdrawAmount));
      
      toast({
        title: "Withdrawal Initiated",
        description: `Your withdrawal of $${withdrawAmount} has been initiated and will be processed shortly.`,
      });
      
      setWithdrawAmount("");
      setIsWithdrawing(false);
    }, 1500);
  };

  const handleDeposit = () => {
    if (!depositAmount || isNaN(Number(depositAmount)) || Number(depositAmount) <= 0) {
      toast({
        variant: "destructive",
        title: "Invalid amount",
        description: "Please enter a valid amount to deposit.",
      });
      return;
    }

    setIsDepositing(true);

    // Simulate API call
    setTimeout(() => {
      setWalletBalance(prev => prev + Number(depositAmount));
      
      toast({
        title: "Deposit Successful",
        description: `Your deposit of $${depositAmount} has been added to your wallet.`,
      });
      
      setDepositAmount("");
      setIsDepositing(false);
    }, 1500);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Wallet & Payments</h1>
            <p className="text-gray-600">Manage your funds, track earnings, and process payments</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <WalletIcon className="mr-2 h-5 w-5" />
                  Available Balance
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Funds ready for withdrawal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{formatCurrency(walletBalance)}</p>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-blue-400 pt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="bg-white text-blue-700 hover:bg-blue-50">
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      Withdraw
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Withdraw Funds</DialogTitle>
                      <DialogDescription>
                        Withdraw your available balance to your preferred payment method.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="withdraw-amount">Amount to Withdraw</Label>
                        <div className="relative mt-1">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            id="withdraw-amount"
                            type="number"
                            placeholder="0.00"
                            className="pl-8"
                            value={withdrawAmount}
                            onChange={(e) => setWithdrawAmount(e.target.value)}
                          />
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Available: {formatCurrency(walletBalance)}
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="withdraw-method">Withdrawal Method</Label>
                        <Select 
                          value={withdrawMethod} 
                          onValueChange={setWithdrawMethod}
                        >
                          <SelectTrigger id="withdraw-method">
                            <SelectValue placeholder="Select a payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bank">Bank Account</SelectItem>
                            <SelectItem value="paypal">PayPal</SelectItem>
                            <SelectItem value="venmo">Venmo</SelectItem>
                            <SelectItem value="crypto">Cryptocurrency</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="bg-amber-50 border border-amber-200 rounded p-3 flex items-start">
                        <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-amber-800">
                          Withdrawals typically process within 1-3 business days depending on your payment method.
                        </p>
                      </div>
                    </div>
                    
                    <DialogFooter>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setWithdrawAmount("");
                          setWithdrawMethod("bank");
                        }}
                      >
                        Cancel
                      </Button>
                      <Button 
                        onClick={handleWithdraw}
                        disabled={isWithdrawing}
                      >
                        {isWithdrawing ? "Processing..." : "Withdraw Funds"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="bg-white text-blue-700 hover:bg-blue-50">
                      <ArrowDownLeft className="mr-2 h-4 w-4" />
                      Deposit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Deposit Funds</DialogTitle>
                      <DialogDescription>
                        Add funds to your wallet to pay for services.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="deposit-amount">Amount to Deposit</Label>
                        <div className="relative mt-1">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            id="deposit-amount"
                            type="number"
                            placeholder="0.00"
                            className="pl-8"
                            value={depositAmount}
                            onChange={(e) => setDepositAmount(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label>Payment Method</Label>
                        <div className="grid grid-cols-2 gap-3 mt-1">
                          <Button variant="outline" className="justify-start">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Credit Card
                          </Button>
                          <Button variant="outline" className="justify-start">
                            <Banknote className="mr-2 h-4 w-4" />
                            Bank Transfer
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded p-3 flex items-start">
                        <HelpCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-blue-800">
                          Deposits are processed immediately. You can use your funds right away after depositing.
                        </p>
                      </div>
                    </div>
                    
                    <DialogFooter>
                      <Button 
                        variant="outline" 
                        onClick={() => setDepositAmount("")}
                      >
                        Cancel
                      </Button>
                      <Button 
                        onClick={handleDeposit}
                        disabled={isDepositing}
                      >
                        {isDepositing ? "Processing..." : "Deposit Funds"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5 text-gray-500" />
                  Pending Balance
                </CardTitle>
                <CardDescription>
                  Funds being processed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{formatCurrency(pendingBalance)}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <p className="text-sm text-gray-500">
                  Pending funds are typically released within 7 days after project completion.
                </p>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart4 className="mr-2 h-5 w-5 text-gray-500" />
                  Earnings Overview
                </CardTitle>
                <CardDescription>
                  Your earnings this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{formatCurrency(1125)}</p>
                <p className="text-sm text-green-600 mt-1">
                  +32% from last month
                </p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/earnings")}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Earnings Report
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <Tabs defaultValue="transactions">
              <div className="border-b">
                <TabsList className="w-full justify-start rounded-none border-b px-6">
                  <TabsTrigger value="transactions" className="rounded-t-lg py-3">
                    Transaction History
                  </TabsTrigger>
                  <TabsTrigger value="payment-methods" className="rounded-t-lg py-3">
                    Payment Methods
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="rounded-t-lg py-3">
                    Payment Settings
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="transactions" className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Recent Transactions</h3>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                  </Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 text-gray-500 font-medium">Date</th>
                        <th className="text-left p-3 text-gray-500 font-medium">Description</th>
                        <th className="text-right p-3 text-gray-500 font-medium">Amount</th>
                        <th className="text-right p-3 text-gray-500 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b hover:bg-gray-50">
                          <td className="p-3 text-sm">
                            {formatDate(transaction.date)}
                          </td>
                          <td className="p-3">
                            <div className="flex items-center">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                transaction.type === "received" 
                                  ? "bg-green-100 text-green-600"
                                  : transaction.type === "withdrawal"
                                  ? "bg-blue-100 text-blue-600"
                                  : transaction.type === "deposit"
                                  ? "bg-purple-100 text-purple-600"
                                  : "bg-red-100 text-red-600"
                              }`}>
                                {transaction.type === "received" && <ArrowDownLeft className="h-4 w-4" />}
                                {transaction.type === "withdrawal" && <ArrowUpRight className="h-4 w-4" />}
                                {transaction.type === "deposit" && <Plus className="h-4 w-4" />}
                                {transaction.type === "payment" && <CreditCard className="h-4 w-4" />}
                              </div>
                              <div>
                                <p className="font-medium">{transaction.description}</p>
                                <p className="text-xs text-gray-500">
                                  {transaction.type === "received" 
                                    ? "Payment Received"
                                    : transaction.type === "withdrawal"
                                    ? "Withdrawal"
                                    : transaction.type === "deposit"
                                    ? "Deposit"
                                    : "Payment"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className={`p-3 text-right font-medium ${
                            transaction.type === "received" || transaction.type === "deposit"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}>
                            {transaction.type === "received" || transaction.type === "deposit"
                              ? `+${formatCurrency(transaction.amount)}`
                              : `-${formatCurrency(transaction.amount)}`}
                          </td>
                          <td className="p-3 text-right">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              transaction.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : transaction.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}>
                              {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" onClick={() => navigate("/transactions")}>
                    View All Transactions
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="payment-methods" className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Your Payment Methods</h3>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Method
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <CreditCard className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Credit Card</p>
                            <p className="text-gray-500">Visa ending in 4242</p>
                            <p className="text-xs text-gray-500">Expires 05/25</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Remove</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <div className="bg-purple-100 p-3 rounded-full mr-4">
                            <Banknote className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-medium">Bank Account</p>
                            <p className="text-gray-500">Chase Bank ending in 6789</p>
                            <p className="text-xs text-gray-500">Added on May 15, 2023</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Remove</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Payment Preferences</h3>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <Label htmlFor="default-payment">Default Payment Method</Label>
                          <Select defaultValue="bank">
                            <SelectTrigger id="default-payment">
                              <SelectValue placeholder="Select default payment method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bank">Bank Account (Chase)</SelectItem>
                              <SelectItem value="card">Credit Card (Visa)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="currency">Currency</Label>
                          <Select defaultValue="usd">
                            <SelectTrigger id="currency">
                              <SelectValue placeholder="Select currency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="usd">USD - US Dollar</SelectItem>
                              <SelectItem value="eur">EUR - Euro</SelectItem>
                              <SelectItem value="gbp">GBP - British Pound</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label>Auto Withdraw</Label>
                          <Select defaultValue="manual">
                            <SelectTrigger>
                              <SelectValue placeholder="Select withdrawal preference" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="manual">Manual Withdrawals Only</SelectItem>
                              <SelectItem value="monthly">Monthly (1st of Month)</SelectItem>
                              <SelectItem value="threshold">When Balance Exceeds $1,000</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Tax Information</h3>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">W-9 Tax Form</p>
                            <p className="text-sm text-gray-500">Required for US freelancers earning over $600</p>
                          </div>
                          <Button>Upload Form</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Email Notifications</p>
                            <p className="text-sm text-gray-500">Receive emails for transactions</p>
                          </div>
                          <Button variant="outline">Configure</Button>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div>
                            <p className="font-medium">Monthly Statements</p>
                            <p className="text-sm text-gray-500">Receive monthly earnings statements</p>
                          </div>
                          <Button variant="outline">Configure</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wallet;
