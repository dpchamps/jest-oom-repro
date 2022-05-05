
  describe("some-evil-spec=95", () => {
    it("evil-block-95", () => {
      window.evil_95 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  