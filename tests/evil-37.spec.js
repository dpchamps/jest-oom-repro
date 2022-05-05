
  describe("some-evil-spec=37", () => {
    it("evil-block-37", () => {
      window.evil_37 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  