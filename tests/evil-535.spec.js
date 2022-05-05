
  describe("some-evil-spec=535", () => {
    it("evil-block-535", () => {
      window.evil_535 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  