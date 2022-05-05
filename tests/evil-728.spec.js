
  describe("some-evil-spec=728", () => {
    it("evil-block-728", () => {
      window.evil_728 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  