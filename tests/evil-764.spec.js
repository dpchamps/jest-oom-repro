
  describe("some-evil-spec=764", () => {
    it("evil-block-764", () => {
      window.evil_764 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  