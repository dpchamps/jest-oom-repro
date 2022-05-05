
  describe("some-evil-spec=734", () => {
    it("evil-block-734", () => {
      window.evil_734 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  