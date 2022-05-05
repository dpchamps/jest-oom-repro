
  describe("some-evil-spec=476", () => {
    it("evil-block-476", () => {
      window.evil_476 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  