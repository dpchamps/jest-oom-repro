
  describe("some-evil-spec=993", () => {
    it("evil-block-993", () => {
      window.evil_993 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  