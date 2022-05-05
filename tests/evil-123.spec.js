
  describe("some-evil-spec=123", () => {
    it("evil-block-123", () => {
      window.evil_123 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  