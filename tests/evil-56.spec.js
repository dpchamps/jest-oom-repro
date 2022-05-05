
  describe("some-evil-spec=56", () => {
    it("evil-block-56", () => {
      window.evil_56 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  