
  describe("some-evil-spec=495", () => {
    it("evil-block-495", () => {
      window.evil_495 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  