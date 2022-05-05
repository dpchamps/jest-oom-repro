
  describe("some-evil-spec=617", () => {
    it("evil-block-617", () => {
      window.evil_617 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  