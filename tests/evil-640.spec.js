
  describe("some-evil-spec=640", () => {
    it("evil-block-640", () => {
      window.evil_640 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  