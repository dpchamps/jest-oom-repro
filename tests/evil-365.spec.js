
  describe("some-evil-spec=365", () => {
    it("evil-block-365", () => {
      window.evil_365 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  