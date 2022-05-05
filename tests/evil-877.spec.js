
  describe("some-evil-spec=877", () => {
    it("evil-block-877", () => {
      window.evil_877 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  