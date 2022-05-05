
  describe("some-evil-spec=865", () => {
    it("evil-block-865", () => {
      window.evil_865 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  