
  describe("some-evil-spec=82", () => {
    it("evil-block-82", () => {
      window.evil_82 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  