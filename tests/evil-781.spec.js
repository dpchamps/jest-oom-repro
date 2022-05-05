
  describe("some-evil-spec=781", () => {
    it("evil-block-781", () => {
      window.evil_781 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  