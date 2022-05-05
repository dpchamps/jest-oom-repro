
  describe("some-evil-spec=10", () => {
    it("evil-block-10", () => {
      window.evil_10 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  