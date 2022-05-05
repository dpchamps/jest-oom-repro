
  describe("some-evil-spec=456", () => {
    it("evil-block-456", () => {
      window.evil_456 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  