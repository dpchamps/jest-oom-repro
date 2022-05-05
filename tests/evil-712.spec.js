
  describe("some-evil-spec=712", () => {
    it("evil-block-712", () => {
      window.evil_712 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  