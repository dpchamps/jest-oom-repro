
  describe("some-evil-spec=570", () => {
    it("evil-block-570", () => {
      window.evil_570 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  